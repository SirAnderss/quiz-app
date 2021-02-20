import React, { useContext, useState, useEffect } from 'react';
import QuestionContext from '../../context/questions/QuestionContext';

function Question({ question, last }) {
  const { score, correctAnswers, setScore, updateUser } = useContext(
    QuestionContext
  );
  const [answers, setAnswers] = useState([]);

  const sortAnswers = () =>
    setAnswers(question.answers.sort(() => Math.random() - 0.5));

  const endQuiz = (answer) => {
    updateUser(answer);
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
    <div>
      {last ? (
        <div className="flex flex-col items-center ">
          <div className="text-3xl my-8 px-8 w-full text-center">{question.question}</div>
          <div className="max-w-lg p-16 flex justify-center flex-wrap bg-red-400">
            {answers.map((item, key) => (
              <div
                key={key}
                onClick={() => {
                  checkAnswer(item);
                  endQuiz(item);
                }}
                className="text-xl w-36 h-36 p-2 flex items-center justify-center text-center cursor-pointer rounded-md shadow-xl transform hover:scale-110 transition duration-300 delay-100 bg-gray-400 m-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
        <div className="w-full h-5/6 flex flex-col items-center ">
          <div className="text-3xl my-8 px-8 w-full text-center">{question.question}</div>
          <div className="max-w-lg p-16 flex justify-center flex-wrap bg-red-400">
            {answers.map((item, key) => (
              <div
                key={key}
                onClick={() => {
                  checkAnswer(item);
                }}
                className="text-xl w-36 h-36 p-2 flex items-center justify-center text-center cursor-pointer rounded-md shadow-xl transform hover:scale-110 transition duration-300 delay-100 bg-gray-400 m-4"
              >
                {item}
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
