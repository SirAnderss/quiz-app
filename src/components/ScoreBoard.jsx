import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import UserState from '../context/user/UserState';
import UserList from './users/UserList';
import User from './users/User';
import Congrats from './Congrats';

function ScoreBoard() {
  const match = useRouteMatch({
    path: '/finish',
    strict: true,
    sensitive: true,
  });

  return (
    <UserState>
      <div className="w-full h-screen justify-center items-center">
        <UserList />
        {!match ? <User /> : <Congrats />}
      </div>
    </UserState>
  );
}

export default ScoreBoard;
