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
        <div className="w-full md:max-w-md mx-auto flex flex-col items-center pt-12">
          <h1 className="text-5xl text-gray-700">Score Board</h1>
          <table className="w-10/12 mx-auto rounded-lg overflow-hidden shadow-2xl my-5">
            <thead className="text-white bg-green-400 mb-2">
              <td className="p-3 text-left">Name</td>
              <td className="p-3 text-left">Score</td>
              <td className="p-3 text-left">Time</td>
            </thead>
            <tbody className="">
              {users.map((item, key) => (
                <tr key={key} className="mb-2 border-grey-light border">
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer">
                    {item.name}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer text-right">
                    {item.score}
                  </td>
                  <td className="border-grey-light border hover:bg-gray-100 p-3 text-green-400 hover:text-green-600 hover:font-medium cursor-pointer text-right">
                    {item.time}
                  </td>
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
