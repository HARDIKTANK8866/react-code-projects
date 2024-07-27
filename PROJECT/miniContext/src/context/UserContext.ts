import { createContext } from 'react';

type User = {
  name: string;
  age: number;
  email: string;
} | null;

interface UserContextProps {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export default UserContext;
