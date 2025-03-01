import React from 'react';
import logo from './logo.svg';
import './App.css';

import { fetchResponse } from './gemini_api';

function App() {
  return (
    <div className="App">
      <textarea name="input"/>
    </div>
  );
}

export default App;
