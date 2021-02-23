import React, { useEffect, useContext } from 'react';
import UserContext from '../../context/user/UserContext';
import Loader from '../Loader';

function UserList() {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <div className="user-container">
          <h1 className="score-header">Score Board</h1>
          <table className="tbl-table">
            <thead className="table-header-row">
              <tr>
                <td className="table-header-col">Name</td>
                <td className="table-header-col">Score</td>
                <td className="table-header-col">Time</td>
              </tr>
            </thead>
            <tbody className="">
              {users.map((item, key) => (
                <tr key={key} className="table-body-row">
                  <td className="table-body-col">{item.name}</td>
                  <td className="table-body-col text-right">{item.score}</td>
                  <td className="table-body-col text-right">{item.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <Loader />
        </>
      )}
    </>
  );
}

export default UserList;
