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
        <div className="user">
          <h1 className="user-title">
            Welcome {user.name}
          </h1>
          <input
            type="text"
            placeholder="Insert your name"
            onChange={handleOnChange}
            autoComplete="off"
            required
            className="input"
          />
          <button onClick={handleClick} className="btn">
            Start
          </button>
          <ToastContainer />
        </div>
      ) : null}
    </>
  );
}

export default User;
