import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/home.css";
import "../App.css";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Magic Mirror</h1>
      <img src="/images/mirror.jpg" alt="" />

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
