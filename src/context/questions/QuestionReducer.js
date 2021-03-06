import {
  GET_QUESTIONS,
  CLEAR_QUESTIONS,
  SET_CORRECT_ANSWERS,
  SET_INCORRECT_ANSWERS,
  SET_SCORE,
  SET_TIMER,
  STOP_TIMER,
  SET_TOPIC,
  SET_DIFFICULTY,
} from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };
    case CLEAR_QUESTIONS:
      return {
        ...state,
        questions: payload,
      };
    case SET_CORRECT_ANSWERS:
      return {
        ...state,
        correctAnswers: payload,
      };
    case SET_INCORRECT_ANSWERS:
      return {
        ...state,
        incorrectAnswers: payload,
      };
    case SET_TIMER:
      return {
        ...state,
        timer: payload,
      };
    case STOP_TIMER:
      return {
        ...state,
        scoreTime: payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: payload,
      };
    case SET_TOPIC:
      return {
        ...state,
        topic: payload,
      };
    case SET_DIFFICULTY:
      return {
        ...state,
        difficulty: payload,
      };

    default:
      return state;
  }
};
