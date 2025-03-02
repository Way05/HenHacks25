import React from 'react';
import { Link } from 'react-router-dom';
import "../CSS/home.css";
import "../App.css";

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1>Welcome to the Magic Mirror</h1>

      {/* Instructions Div */}
      <div className="instructions">
        <h2>How to Use</h2>
        <p>
          Welcome to the Magic Mirror! This is where you can interact with the AI. To get started,
          click on the buttons below to either edit your profile or chat with the AI. Enjoy your experience!
        </p>
      </div>

      <div className="imgDiv">
        <img src="/images/mirror.png" alt="Magic Mirror" />
      </div>

      {/* Navigation Buttons */}
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
