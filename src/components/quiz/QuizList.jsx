import React, { useContext, useRef, useState } from 'react';
import QuestionContext from '../../context/questions/QuestionContext';

import Question from './Question';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

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
  const slider = useRef(null);

  const settings = {
    infinite: false,
    autoplay: false,
    arrows: false,
    dots: false,
    fade: true,
    lazyLoad: true,
    speed: 500,
    nextArrow: <Question />,
  };

  const next = () => slider.current.slickNext();

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
      <div className="nav-bar">
        <span>{user}</span>
        <span>Score: {score}</span>
      </div>
      {!topic ? (
        <div className="topic">
          <div onClick={() => setTopic(15)} className="option">
            Video Games
          </div>
          <div onClick={() => setTopic(18)} className="option">
            Computing
          </div>
          <div onClick={() => setTopic(10)} className="option">
            Books
          </div>
          <div onClick={() => setTopic(31)} className="option">
            Manga and Anime
          </div>
          <div onClick={() => setTopic(23)} className="option">
            History
          </div>
          <div onClick={() => setTopic(11)} className="option">
            Movies
          </div>
        </div>
      ) : !quiz ? (
        <div className="difficulty">
          <div onClick={() => setQuestions('easy')} className="option">
            Easy
          </div>
          <div onClick={() => setQuestions('medium')} className="option">
            Medium
          </div>
          <div onClick={() => setQuestions('hard')} className="option">
            Hard
          </div>
        </div>
      ) : questions ? (
        <div>
          <Slider ref={slider} {...settings}>
            {questions.map((item, key) => (
              <Question
                question={item}
                key={key}
                last={key === 19 ? true : false}
                next={next}
              />
            ))}
          </Slider>
          <div className="topic-button">
            <button onClick={() => clearTopic()} className="btn">
              Change topic
            </button>
          </div>
        </div>
      ) : (
        <div>Please reload the page...</div>
      )}
    </div>
  );
}

export default QuizList;
