import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

import { handleSubmit } from '../gemini_api';

const ChatPage: React.FC = () => {
  const [response, setResponse] = useState("Waiting for input");

  const handleData = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = formData.get('myInput');
    handleSubmit(data).then((e) => {
      setResponse(e);
    });
  };

  return (
    <div className="Magic Mirror">
      <h1>Welcome to the Magic Mirror Chat Page</h1>

      <div className="image-container">
        <img src="/images/mirror.jpg" alt="" />
        <div className="input">
          <form method="post" onSubmit={handleData}>
            <label>
              Text input: <input name="myInput" defaultValue="" />
            </label>
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
          </form>
        </div>

        {/* Link to Profile and Home Page */}
        <div className="nav">
          <Link to="/">
            <button>Go to Home Page</button>
          </Link>
          <Link to="/profile">
            <button>Go to Profile Page</button>
          </Link>
        </div>
      </div>

      <div className="response">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default ChatPage;