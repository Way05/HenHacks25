import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../CSS/chat.css";
import { l_inputs } from '../gemini_api';

import { handleSubmit } from '../gemini_api';
import { getUserInfo } from '../App';

export const l_responses: string[] = [];

const ChatPage: React.FC = () => {
  const [response, setResponse] = useState("Waiting for input...");

  const handleData = (data: any) => {
    handleSubmit(data).then(function (result) {
      setResponse(result);
      l_responses.push(result);
    });
  };

  return (
    <div className="chat-container">
      <h1>Chat with the Magic Mirror</h1>
      {/* Input Form (Left-Aligned) */}
      <div className="input" style={{ marginTop: '10px' }}>
        <form method="post" onSubmit={handleData}>
            <p>Input your text here:</p>
            <input name="myInput" defaultValue="" />
          <br />
          <button type="reset">Clear</button>
          <button type="submit">Ask</button>
        </form>
      </div>

      {/* AI Response (Right-Aligned) */}
      <div className="response-container">
        <div>
      <img src = "/images/hen.png" alt = "" />

        </div>
        <div className="response">
          <p>{response}</p>
        </div>
      </div>

      {/* Navigation Buttons at Bottom */}
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

export function construct_prompt(input: string, prevI: string, prevO: string): string {
  const user = getUserInfo();
  return `
    input: You are an AI chatbot designed to help users with mental health crises, concerns, or daily stress. YOu are themed as a "magic mirror"
    If they just need to talk, listen to their problems.
    You must be very friendly and supportive no matter what!
    Limit your response to 1-6 sentences

    user details:
    - Name: ${user.name}
    - Age: ${user.age}
    - Pronouns: ${user.gender}
    - Job: ${user.job}
    - Mental health history: ${user.past} (Don't reference this unless it's relevant to user input)

    user prompt: (This is what the user has inputted) 
    "${input}"

    past interactions (each one separated by 3 new lines):
    - Previous user inputs: ${prevI}
    - Previous AI responses: ${prevO}

    Please take all of this information into consideration when responding.
  `;
}

export default ChatPage;
