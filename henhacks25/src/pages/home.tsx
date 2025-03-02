import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/home.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <img className="mirror_img" src="/images/mirror.png" alt="" />

      {/* Link to Profile Page */}
      <div className="nav">
        <Link to="/profile">
          <button>Edit Your Profile</button>
        </Link>
        <Link to="/chat">
          <button>Chat With Magic Mirror</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
