import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

const Profile: React.FC = () => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error('Profile must be used within a UserContextProvider');
  }

  const { user } = userContext;

  return (
    <div className=''>
      {user ? (
        <p className="text-2xl bold">Welcome Logged in as: {user.name}, Passwoed: {user.email}</p>
      ) : (
        <p className='text-2xl bold'>Please log in.</p>
      )}
    </div>
  );
};

export default Profile;
