import React from 'react';
import { Link } from 'react-router-dom';

import { handleSubmit } from '../gemini_api';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Home Page</h1>

      {/* Link to Profile Page */}
      <div className="nav">
        <Link to="/profile">
          <button>Go to Profile Page</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
