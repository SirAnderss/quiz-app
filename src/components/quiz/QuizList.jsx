import React, { useContext, useState } from 'react';
import QuestionContext from '../../context/questions/QuestionContext';

import Question from './Question';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
// import "slick-carousel/slick/slick-theme.css";

function QuizList({ user }) {
  const {
    questions,
    score,
    topic,
    difficulty,
    getQuestions,
    setTopic,
    setDifficulty,
    clearQuestions,
  } = useContext(QuestionContext);
  const [quiz, setQuiz] = useState(false);
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    // slidesToShow: 3,
    // slidesToScroll: 3,
    draggable: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          draggable: true,
        },
      },
    ],
  };

  const clearTopic = () => {
    setTopic(0);
    setDifficulty('');
    clearQuestions();
    setQuiz(false);
  };

  const setQuestions = (val) => {
    setDifficulty(val);
    setQuiz(true);
    getQuestions(topic, difficulty);
  };

  return (
    <div>
      <div className="py-6 flex justify-around uppercase font-bold text-xl text-gray-600 border-b-2 shadow-lg">
        <span>{user}</span>
        <span>Score: {score}</span>
      </div>
      {!topic ? (
        <div>
          <div onClick={() => setTopic(15)}>Video Games</div>
          <div onClick={() => setTopic(18)}>Computing</div>
          <div onClick={() => setTopic(10)}>Books</div>
          <div onClick={() => setTopic(31)}>Manga and Anime</div>
          <div onClick={() => setTopic(23)}>History</div>
          <div onClick={() => setTopic(11)}>Movies</div>
        </div>
      ) : !quiz ? (
        <div>
          <div onClick={() => setQuestions('easy')}>Easy</div>
          <div onClick={() => setQuestions('medium')}>Medium</div>
          <div onClick={() => setQuestions('hard')}>Hard</div>
        </div>
      ) : questions ? (
        <div>
          {questions.map((item, key) => (
            <Slider key={key} {...settings}>
              <div>
                <Question question={item} last={key === 19 ? true : false} />
              </div>
            </Slider>
          ))}
          <button onClick={() => clearTopic()}>Change topic</button>
        </div>
      ) : (
        <div>Please reload the page...</div>
      )}
    </div>
  );
}

export default QuizList;
