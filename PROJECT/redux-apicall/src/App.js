import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./features/gitUserSlice";

function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.app);

  if (data.loading) {
    return <h1>Loading...</h1>;
  }

  if (data.error != null) {
    return <h3>{data.error}</h3>;
  }

  return (
    <div className="container">
      <h1>GitHub Users</h1>
      <button onClick={() => dispatch(getAllData())}>Get GitHub users</button>
      {data.users.map((user) => (
        <div key={user.id} className="user-details">
          <p>
            <span className="key">Avatar URL:</span>{" "}
            <span className="value">
              <a href={user.avatar_url} target="_blank" rel="noopener noreferrer">
                {user.avatar_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Events URL:</span>{" "}
            <span className="value">
              <a href={user.events_url} target="_blank" rel="noopener noreferrer">
                {user.events_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Followers URL:</span>{" "}
            <span className="value">
              <a href={user.followers_url} target="_blank" rel="noopener noreferrer">
                {user.followers_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Following URL:</span>{" "}
            <span className="value">
              <a href={user.following_url} target="_blank" rel="noopener noreferrer">
                {user.following_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Gists URL:</span>{" "}
            <span className="value">
              <a href={user.gists_url} target="_blank" rel="noopener noreferrer">
                {user.gists_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Gravatar ID:</span> <span className="value">{user.gravatar_id}</span>
          </p>
          <p>
            <span className="key">HTML URL:</span>{" "}
            <span className="value">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.html_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">ID:</span> <span className="value">{user.id}</span>
          </p>
          <p>
            <span className="key">Login:</span> <span className="value">{user.login}</span>
          </p>
          <p>
            <span className="key">Node ID:</span> <span className="value">{user.node_id}</span>
          </p>
          <p>
            <span className="key">Organizations URL:</span>{" "}
            <span className="value">
              <a href={user.organizations_url} target="_blank" rel="noopener noreferrer">
                {user.organizations_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Received Events URL:</span>{" "}
            <span className="value">
              <a href={user.received_events_url} target="_blank" rel="noopener noreferrer">
                {user.received_events_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Repos URL:</span>{" "}
            <span className="value">
              <a href={user.repos_url} target="_blank" rel="noopener noreferrer">
                {user.repos_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Site Admin:</span> <span className="value">{user.site_admin ? "Yes" : "No"}</span>
          </p>
          <p>
            <span className="key">Starred URL:</span>{" "}
            <span className="value">
              <a href={user.starred_url} target="_blank" rel="noopener noreferrer">
                {user.starred_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Subscriptions URL:</span>{" "}
            <span className="value">
              <a href={user.subscriptions_url} target="_blank" rel="noopener noreferrer">
                {user.subscriptions_url}
              </a>
            </span>
          </p>
          <p>
            <span className="key">Type:</span> <span className="value">{user.type}</span>
          </p>
          <p>
            <span className="key">URL:</span>{" "}
            <span className="value">
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                {user.url}
              </a>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
