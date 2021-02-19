import React, { useReducer } from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import db from '../../firebase.config';

const UserState = (props) => {
  const initialState = {
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    db.collection('profiles')
      .limit(5)
      .orderBy('score', 'desc')
      .get()
      .then((query) => {
        let arr = [];

        query.empty
          ? dispatch({
              type: 'GET_USERS',
              payload: [],
            })
          : query.forEach((item) => arr.push(item.data()));

        if (arr.length > 0) {
          dispatch({
            type: 'GET_USERS',
            payload: arr,
          });
        }
      })
      .catch((e) => console.error('error', e));
  };

  const setUser = (data) => {
    dispatch({
      type: 'SET_USER',
      payload: {
        name: data,
        time: '00:00',
        score: 0,
      },
    });
  };

  const saveUser = async () => {
    await db
      .collection('profiles')
      .add(state.user)
      .then((docRef) => {
        let userData = state.user;

        let localUser = { ...userData, id: docRef.id };

        localStorage.setItem('user', JSON.stringify(localUser));
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  };

  const updateUser = async (data) => {
    console.log(data);
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        user: state.user,
        getUsers,
        setUser,
        saveUser,
        updateUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
