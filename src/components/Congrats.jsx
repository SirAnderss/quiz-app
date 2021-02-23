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
        <div className="congrats">
          Congrats
          <Link
            to="/"
            className="link"
          >
            Go Home
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Congrats;
