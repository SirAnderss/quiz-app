import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User() {
  const { user, users, setUser, saveUser } = useContext(UserContext);
  const history = useHistory();

  const notify = () => toast.error('Put your name');

  const handleOnChange = (e) => {
    setUser(e.target.value);
  };

  const handleClick = () => {
    if (!user.name) {
      notify();
    } else {
      saveUser();
      history.push(`/${user.name}`);
    }
  };

  return (
    <>
      {users.length > 0 ? (
        <div className="w-5/6 mt-4 mx-auto max-h-32 flex flex-col items-center uppercase">
          <h1 className="text-2xl text-center text-gray-700">
            Welcome {user.name}
          </h1>
          <input
            type="text"
            placeholder="Insert your name"
            onChange={handleOnChange}
            autoComplete="off"
            required
            className="mt-4 border border-gray-400 py-3 px-6 rounded-xl text-center text-gray-700 focus:text-green-500 focus:border-green-500"
          />
          <button
            onClick={handleClick}
            className="mt-8 py-3 px-6 text-xl text-white rounded-lg shadow-xl transform hover:scale-105 transition duration-200 delay-150 bg-green-500"
          >
            Start
          </button>
          <ToastContainer />
        </div>
      ) : null}
    </>
  );
}

export default User;
