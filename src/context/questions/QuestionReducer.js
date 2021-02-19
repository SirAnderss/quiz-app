import {
  GET_QUESTIONS,
  SET_CORRECT_ANSWERS,
  SET_INCORRECT_ANSWERS,
  SET_SCORE,
  SET_TIMER,
  STOP_TIMER,
} from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_QUESTIONS:
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
        questions: payload,
      };
    case SET_SCORE:
      return {
        ...state,
        score: payload,
      };

    default:
      return state;
  }
};
