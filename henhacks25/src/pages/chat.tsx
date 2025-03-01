import React from 'react';
import { Link } from 'react-router-dom';

function handleSubmit(e: any) {
    e.preventDefault();
  
    const form = e.target;
    const formData = new FormData(form);
  
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson.myInput);
  
    //UNCOMMENT THIS TO RECEIVE RESPONSES FROM GEMINI AI
    // const response = fetchResponse(formJson.myInput.toString());
    // console.log(response);
  }


  const Chat: React.FC = () => {
    return (
      <div className="Magic Mirror">
        <h1>Welcome to the Magic Mirror Chat Page</h1>
  
        {/* Form */}
        <div className="input">
          <form method="post" onSubmit={handleSubmit}>
            <label>
              Text input: <input name="myInput" defaultValue="Some initial value" />
            </label>
  
            <button type="reset">Reset form</button>
            <button type="submit">Submit form</button>
          </form>
        </div>
  
        {/* Link to Profile Page */}
        <div className="nav">
          <Link to="/home">
            <button>Go to Home Page</button>
          </Link>

          <Link to="/profile">
            <button>Go to Profile Page</button>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Chat;