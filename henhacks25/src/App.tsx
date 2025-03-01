import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile";

import { fetchResponse } from './gemini_api';

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

function App() {
  return (
    <div className="App">
      <div className="input">
        <form method="post" onSubmit={handleSubmit}>
        <label>
          Text input: <input name="myInput" defaultValue="Some initial value" />
        </label>

        <button type="reset">Reset form</button>
        <button type="submit">Submit form</button>
      </form>
      </div>
    </div>
  );
}

export default App;
