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
    timer: '',
    scoreTime: '',
    score: 0,
    topic: 0,
    difficulty: '',
  };

  const [state, dispatch] = useReducer(QuestionReducer, initialState);

  const getQuestions = () => {
    fetch(
      `${url}&category=${state.topic}&difficulty=${state.difficulty}&type=multiple`
    )
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

  const clearQuestions = () => {
    dispatch({
      type: 'CLEAR_QUESTIONS',
      payload: [],
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

  const updateUser = async (answer) => {
    let time = new Date();
    let counter = formatTime(time - state.timer);

    const localUser = JSON.parse(localStorage.getItem('user'));

    const updatedScore = state.correctAnswers.includes(answer)
      ? state.score + 1
      : state.score;

    let user = {
      name: localUser.name,
      score: updatedScore,
      time: counter,
    };

    dispatch({
      type: 'STOP_TIMER',
      payload: counter,
    });

    const docRef = db.collection('profiles').doc(localUser.id);

    await docRef
      .update(user)
      .then(() => console.log('updated'))
      .catch((e) => console.error(e));
  };

  const setTopic = (category) => {
    dispatch({
      type: 'SET_TOPIC',
      payload: category,
    });
  };

  const setDifficulty = (val) => {
    dispatch({
      type: 'SET_DIFFICULTY',
      payload: val,
    });
  };

  return (
    <QuestionContext.Provider
      value={{
        questions: state.questions,
        correctAnswers: state.correctAnswers,
        incorrectAnswers: state.incorrectAnswers,
        score: state.score,
        timer: state.timer,
        topic: state.topic,
        difficulty: state.diffuculty,
        getQuestions,
        clearQuestions,
        setScore,
        updateUser,
        setTopic,
        setDifficulty,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionState;
