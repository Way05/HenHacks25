import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

import { handleSubmit } from '../gemini_api';
import { getUserInfo } from '../App';

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

export function construct_prompt(input: string,prevI: string, prevO: string): string{
  const user = getUserInfo()
  return `
    input: You are an AI chatbot designed to help users with mental health crises, concerns, or daily stress. 
    If they just need to talk, listen to their problems.
    You must be very friendly and supportive no matter what!
    Limit your response to 3-6 sentences

    user details:
    - Name: ${user.name}
    - Age: ${user.age}
    - Pronouns: ${user.gender}
    - Job: ${user.job}
    - Mental health history: ${user.past}

    user prompt: (This is what the user has inputted) 
    "${input}"

    past interactions:
    - Previous user inputs: ${prevI}
    - Previous AI responses: ${prevO}

    Please take all of this information into consideration when responding. 
  `
}


export default ChatPage;