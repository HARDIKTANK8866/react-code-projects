import React, { useState, useContext, FormEvent } from 'react';
import UserContext from '../context/UserContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('Login must be used within a UserContextProvider');
  }

  const { setUser } = userContext;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUser({ name: username, age: 0, email: password });
  };

  return (
    <div className='center-content-full'>
      <h2 className='text-2xl font-bold  mb-4 text-center '>Login</h2>
      <input
        className="border border-gray-400 rounded-lg p-3 mb-6 w-80"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        className="border border-gray-400 rounded-lg p-3 mb-6 w-80"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

 <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 cursor-pointer center"
        onClick={handleSubmit}
      >
        Submit
      </button>    </div>
  );
};

export default Login;
