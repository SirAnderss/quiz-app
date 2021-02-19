import { GET_USERS, SAVE_USER, SET_USER, UPDATE_USER } from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };

    case SET_USER:
      return {
        ...state,
        user: payload,
      };

    case SAVE_USER:
      return {
        ...state,
        users: payload,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: payload,
      };

    default:
      return state;
  }
};
