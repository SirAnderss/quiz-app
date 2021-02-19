import React from 'react';
import UserState from '../context/user/UserState';
import UserList from './users/UserList';
import User from './users/User';

function ScoreBoard() {
  return (
    <UserState>
      <div className="">
        <UserList />
        <User />
      </div>
    </UserState>
  );
}

export default ScoreBoard;
