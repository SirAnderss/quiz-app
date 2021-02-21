import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/user/UserContext';

function Congrats() {
  const { getUsers, users } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        <div className="w-full flex flex-col text-4xl text-gray-700 my-8 text-center font-bold">
          Congrats
          <Link
            to="/"
            className="mt-12 text-lg font-semibold tracking-widest text-gray-900 uppercase dark-mode:text-white focus:outline-none focus:shadow-outline"
          >
            Go Home
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Congrats;
