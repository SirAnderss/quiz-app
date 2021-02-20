import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import UserState from '../context/user/UserState';
import UserList from './users/UserList';
import User from './users/User';

function ScoreBoard() {
  const match = useRouteMatch({
    path: '/finish',
    strict: true,
    sensitive: true,
  });

  return (
    <UserState>
      <div className="">
        <UserList />
        {!match ? <User /> : null}
      </div>
    </UserState>
  );
}

export default ScoreBoard;
