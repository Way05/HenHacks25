import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profile" 

import { fetchResponse } from './gemini_api';

function App() {
  return (
    <div className="App">
      <textarea name="input"/>
      <button> </button>
    </div>
  );
}

export default App;
