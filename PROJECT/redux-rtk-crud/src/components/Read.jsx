import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, showUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";

function Read() {
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [showPopup, setShowPopup] = useState(false);

  const { users, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  const handleViewClick = (userId) => {
    setId(userId);
    setShowPopup(true);
  };

  const handleDeleteClick = (userId) => {
    dispatch(deleteUser(userId));
  };

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div>
      {showPopup && (
        <CustomModal
          id={id}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
      <h2>All Data</h2>
      {
        users.map((user) => (
          <div key={user.id}>
            <div className="card w-50 mx-auto my-2">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  {user.email}
                </h6>
                <p className="card-text">{user.gender}</p>
                <button
                  className="card-link"
                  onClick={() => handleViewClick(user.id)}
                >
                  View
                </button>
                <Link to={`/edit/${user.id}`} className="card-link">
                  Edit
                </Link>
                <Link
                  to="#"
                  className="card-link"
                  onClick={() => handleDeleteClick(user.id)}
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Read;