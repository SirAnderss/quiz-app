import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/user/UserContext';

function UserList() {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length > 0 ? (
        users.map((item, key) => (
          <div key={key}>
            <span>{item.name}</span>
            <span>{item.score}</span>
            <span>{item.time}</span>
          </div>
        ))
      ) : (
        <div>Cargando...</div>
      )}
    </>
  );
}

export default UserList;
