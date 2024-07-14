import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const TableList: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <h1 className='font-bold text-xl'>User Table</h1>
      <table className='w-screen'>
        <thead className='h-[50px]' >
          <tr className=' text-center'>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className='px-5 text-center'>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;
