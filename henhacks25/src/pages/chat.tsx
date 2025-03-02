import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { handleSubmit } from '../gemini_api';

  const ChatPage: React.FC = () => {
    const [response, setResponse] = useState("Waiting for input");

    const handleData = (data: any) => {
      const output = handleSubmit(data).then(function(e) {
        setResponse(e);
      });
    }

    return (
      <div className="Magic Mirror">
        <h1>Welcome to the Magic Mirror Chat Page</h1>
  
        {/* Form */}
        <div className="input">
          <form method="post" onSubmit={handleData}>
            <label>
              Text input: <input name="myInput" defaultValue="Some initial value" />
            </label>
  
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
          </form>
        </div>

        <div>
          <p>{response}</p>
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