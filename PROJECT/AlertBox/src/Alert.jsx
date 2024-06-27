// Alert.js
import { useEffect } from 'react';

const Alert = ({ message, type, removeAlert }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeAlert();
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, [removeAlert]);

  return (
    <div className={`alert ${type} p-4 mb-4 text-sm text-white rounded-lg`}>
      {message}
    </div>
  );
};

export default Alert;
