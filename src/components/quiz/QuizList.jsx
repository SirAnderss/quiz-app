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
      <div className="py-6 w-full fixed flex justify-around uppercase font-bold text-xl bg-white text-gray-600 border-b-2 shadow-lg z-50">
        <span>{user}</span>
        <span>Score: {score}</span>
      </div>
      {!topic ? (
        <div className="px-8 py-20 mx-auto sm:w-5/6 sm:h-auto sm:items-stretch sm:py-4 sm:pt-24 md:h-screen md:items-center md:max-w-md md:py-40 lg:py-28 h-screen flex flex-wrap items-center justify-around">
          <div
            onClick={() => setTopic(15)}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Video Games
          </div>
          <div
            onClick={() => setTopic(18)}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Computing
          </div>
          <div
            onClick={() => setTopic(10)}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Books
          </div>
          <div
            onClick={() => setTopic(31)}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Manga and Anime
          </div>
          <div
            onClick={() => setTopic(23)}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            History
          </div>
          <div
            onClick={() => setTopic(11)}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Movies
          </div>
        </div>
      ) : !quiz ? (
        <div className="px-8 py-20 mx-auto sm:w-5/6 sm:items-center sm:h-screen sm:justify-around sm:py-4 sm:pt-24 sm:flex-row h-screen flex flex-col items-center justify-around">
          <div
            onClick={() => setQuestions('easy')}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Easy
          </div>
          <div
            onClick={() => setQuestions('medium')}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Medium
          </div>
          <div
            onClick={() => setQuestions('hard')}
            className="w-36 h-36 p-4 text-center text-xl font-semibold text-white flex items-center justify-center bg-green-500 border-2 rounded-xl transform hover:scale-110 transition duration-200 delay-150 cursor-pointer"
          >
            Hard
          </div>
        </div>
      ) : questions ? (
        <div className="">
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
          <div className="w-full -mt-8 md:-mt-48 lg:-mt-24 text-center">
            <button onClick={() => clearTopic()} className="mb-8 py-3 px-5 text-xl text-white rounded-lg shadow-xl transform hover:scale-105 transition duration-200 delay-150 bg-blue-600">
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
