import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

import { handleSubmit } from '../gemini_api';

const ChatPage: React.FC = () => {
  return (
    <div className="Magic Mirror">
      <h1>Welcome to the Magic Mirror Chat Page</h1>

      <div className="image-container">
        <img src="images/mirror.jpg" alt="" />
        <div className="input">
          <form method="post" onSubmit={handleSubmit}>
            <label>
              Text input: <input name="myInput" defaultValue="" />
            </label>
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
          </form>
        </div>
      </div>

      {/* Link to Profile Page */}
      <div className="nav">
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
        <Link to="/profile">
          <button>Go to Profile Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ChatPage;