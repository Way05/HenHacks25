import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Home Page</h1>

      {/* Link to Profile Page */}
      <div className="nav">
        <Link to="/profile">
          <button>Go to Profile Page</button>
        </Link>
        <Link to="/chat">
          <button>Go to Chat Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
