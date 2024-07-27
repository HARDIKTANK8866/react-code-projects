import React from 'react';
import { useDispatch } from 'react-redux';
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await authService.logout();
      dispatch(logout());
    } catch (error) {
      console.log("Logout error", error);
    }
  };

  return (
    <button
      className="bg-purple-200 hover:bg-purple-300 rounded-full uppercase text-purple-700 py-3 px-6"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
}

export default LogoutBtn;