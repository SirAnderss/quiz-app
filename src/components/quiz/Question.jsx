import React, { useContext, useState, useEffect } from 'react';
import QuestionContext from '../../context/questions/QuestionContext';
import clearText from '../../resources/clearText';
import { useHistory } from 'react-router-dom';

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
    localStorage.removeItem('user');
    history.push('/finish');
  };

  const checkAnswer = (answer) => {
    const correct = correctAnswers.includes(answer);

    if (correct) {
      setScore(score + 1);
    }
  };

  useEffect(() => {
    sortAnswers();
  }, []);

  return (
    <div className="question">
      {last ? (
        <div className="question-container">
          <div className="question-header">{clearText(question.question)}</div>
          <div className="answers-container">
            {answers.map((item, key) => (
              <div
                key={key}
                onClick={() => {
                  checkAnswer(item);
                  next();
                  endQuiz(item);
                }}
                className="answers"
              >
                {clearText(item)}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="question-container ">
            <div className="question-header">
              {clearText(question.question)}
            </div>
            <div className="answers-container">
              {answers.map((item, key) => (
                <div
                  key={key}
                  onClick={() => {
                    checkAnswer(item);
                    next();
                  }}
                  className="answers"
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
