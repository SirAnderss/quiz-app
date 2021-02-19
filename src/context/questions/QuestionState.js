import React, { useReducer } from 'react';
import QuestionContext from './QuestionContext';
import QuestionReducer from './QuestionReducer';
import db from '../../firebase.config';
import url from '../../resources/api';
import formatTime from '../../resources/formatTime';

const QuestionState = (props) => {
  const initialState = {
    user: {},
    questions: [],
    correctAnswers: [],
    incorrectAnswers: [],
    timer: null,
    score: 0,
  };

  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  const getQuestions = (category, difficulty) => {
    fetch(`${url}&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then((response) => response.json())
      .catch((e) => console.error('Error', e))
      .then((data) => {
        let correct = [];
        let incorrect = [];
        let questions = [];

        if (data.results.length > 0) {
          data.results.forEach((item) => {
            let answers = [];

            answers.push(item.correct_answer);

            correct.push(item.correct_answer);

            item.incorrect_answers.forEach((item) => {
              incorrect.push(item);
              answers.push(item);
            });

            questions.push({ question: item.question, answers: answers });
          });

          startCounter();

          dispatch({
            type: 'GET_QUESTIONS',
            payload: questions,
          });

          dispatch({
            type: 'SET_CORRECT_ANSWERS',
            payload: correct,
          });

          dispatch({
            type: 'SET_INCORRECT_ANSWERS',
            payload: incorrect,
          });
        }
      });
  };

  const setScore = () => {
    dispatch({
      type: 'SET_SCORE',
      payload: state.score + 1,
    });
  };

  const startCounter = () => {
    let time = new Date();

    dispatch({
      type: 'SET_TIMER',
      payload: time,
    });
  };

  const stopCounter = () => {
    let time = new Date();

    dispatch({
      type: 'STOP_TIMER',
      payload: formatTime(time - state.timer),
    });

    updateUser();
  };

  const updateUser = () => {
    const user = localStorage.getItem(JSON.parse('user'));
  };

  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions,
        correctAnswers: state.correctAnswers,
        incorrectAnswers: state.incorrectAnswers,
        timer: state.timer,
        getQuestions,
        setScore,
        stopCounter,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;
