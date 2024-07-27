import React from 'react';
import UserContext from './UserContext';

type User = {
  name: string;
  age: number;
  email: string;
} | null;

interface UserContextProviderProps {
  children: React.ReactNode;
}

const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;