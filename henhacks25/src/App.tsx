import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';  // Import the Home component
import ProfilePage from './pages/profile'; // Import ProfilePage
import ChatPage from './pages/chat';



export const getUserInfo = () => {
  const user = {
    name: localStorage.getItem("name"),
    age: localStorage.getItem("age"),
    job: localStorage.getItem("job"),
    gender: localStorage.getItem("gender"),
    past: localStorage.getItem("past"),
  };
  
  return user;
  
};

function App() {
  
  return (
    <Router> {/* Make sure Router is wrapping the entire app */}
      <div className="App">
        {/* Define Routes */}
        <Routes>
          {/* Default Route for Home component */}
          <Route path="/" element={<Home />} />  {/* Home component is now the default */}
          <Route path="/profile" element={<ProfilePage />} />  {/* ProfilePage route */}
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
