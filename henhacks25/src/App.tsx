import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/profile";

import { fetchResponse } from './gemini_api';

function handleSubmit(e: any) {
  // Prevent the browser from reloading the page
  e.preventDefault();

  // Read the form data
  const form = e.target;
  const formData = new FormData(form);

  // You can pass formData as a fetch body directly:
  fetch('/some-api', { method: form.method, body: formData });

  // Or you can work with it as a plain object:
  const formJson = Object.fromEntries(formData.entries());
  console.log(formJson);
}

function App() {
  return (
    <Router> {/* Wrap everything in Router */}
      <div className="App">
        <form method="post" onSubmit={handleSubmit}>
          <label>
            Text input: <input name="myInput" defaultValue="Some initial value" />
          </label>
          
          <button type="reset">Reset form</button>
          <button type="submit">Submit form</button>
        </form>

        {/* Add a link to ProfilePage */}
        <Link to="/profile">
          <button>Go to Profile Page</button> {/* Button to navigate to Profile page */}
        </Link>

        {/* Define routes for pages */}
        <Routes>
          <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
