import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

const App: React.FC = () => {
  return (
    
    <UserContextProvider>
    <div className="p-8 border border-gray-300 rounded bg-blue-100 bg-opacity-30 shadow-md-blue w-1/2 mx-auto">
    <h1 className="text-3xl font-semibold border-b-4 border-blue-500">Welcome to the React Context</h1>
      <Login />
      <Profile />
      </div>
    </UserContextProvider>
  );
};

export default App;
