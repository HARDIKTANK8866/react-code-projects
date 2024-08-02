import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showUser } from "../features/userDetailSlice";

function Read() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showUser());
  }, []);

  return (
    <div>
      <h2>All Data</h2>
      <div>
        <div className="card w-50 mx-auto ">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              Card subtitle
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Read;
