import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/user/UserContext';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function User() {
  const { user, setUser, saveUser } = useContext(UserContext);
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
    <div>
      <h1>Welcome {user.name}</h1>
      <input
        type="text"
        placeholder="Insert your name"
        onChange={handleOnChange}
        autoComplete="off"
        required
      />
      <button onClick={handleClick}>Start</button>
      <ToastContainer />
    </div>
  );
}

export default User;
