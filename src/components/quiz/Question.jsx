import React, { useContext, useState, useEffect } from 'react';
import QuestionContext from '../../context/questions/QuestionContext';
import clearText from '../../resources/clearText';
import { useHistory } from "react-router-dom";

function Question({ question, last, next }) {
  const { score, correctAnswers, setScore, updateUser } = useContext(
    QuestionContext
  );
  const [answers, setAnswers] = useState([]);
  const history = useHistory();

  const sortAnswers = () =>
    setAnswers(question.answers.sort(() => Math.random() - 0.5));

  const endQuiz = (answer) => {
    updateUser(answer);
    history.push("/finish");
  };

  useEffect(() => {
    sortAnswers();
  }, []);

  const checkAnswer = (answer) => {
    const correct = correctAnswers.includes(answer);

    if (correct) {
      setScore(score + 1);
    }
  };

  return (
    <div className="flex h-screen mt-20 justify-center items-center">
      {last ? (
        <div className="flex flex-col items-center ">
          <div className="text-3xl my-12 px-8 w-full text-center">
            {clearText(question.question)}
          </div>
          <div className="max-w-lg py-8 flex justify-center flex-wrap bg-green-400">
            {answers.map((item, key) => (
              <div
                key={key}
                onClick={() => {
                  checkAnswer(item);
                  next();
                  endQuiz(item);
                }}
                className="text-xl w-36 h-36 p-2 flex items-center justify-center text-center cursor-pointer rounded-md shadow-xl transform hover:scale-110 transition duration-300 delay-100 bg-white text-gray-600 m-4"
              >
                {clearText(item)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="w-full h-5/6 flex flex-col items-center ">
            <div className="text-3xl my-8 px-8 w-full text-center">
              {clearText(question.question)}
            </div>
            <div className="max-w-lg py-8 flex justify-center flex-wrap bg-green-400">
              {answers.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    checkAnswer(item);
                    next();
                  }}
                  className="text-xl w-36 h-36 p-2 flex items-center justify-center text-center cursor-pointer rounded-md shadow-xl transform hover:scale-110 transition duration-300 delay-100 bg-white text-gray-600 m-4"
                >
                  {clearText(item)}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Question;
