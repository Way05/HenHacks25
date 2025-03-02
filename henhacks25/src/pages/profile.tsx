import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/profile.css";

const ProfilePage: React.FC = () => {
  // State for user inputs
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [gender, setGender] = useState("");
  const [past, setPast] = useState("");

  // Load stored values when component mounts
  useEffect(() => {
    setName(localStorage.getItem("name") || "");
    setAge(localStorage.getItem("age") || "");
    setJob(localStorage.getItem("job") || "");
    setGender(localStorage.getItem("gender") || "");
    setPast(localStorage.getItem("past") || "");
  }, []);

  // Store data when values change
  const handleChange = (setter: React.Dispatch<React.SetStateAction<string>>, key: string) => 
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement>) => {
      setter(e.target.value);
      localStorage.setItem(key, e.target.value);
    };

  return (
    <div className="profile-container">
      <h1>Edit Your Profile</h1>
      <div className="input-container">
      <p>Add some details for Gemini to get to know you!</p>
        {/* Name Input with Floating Placeholder */}
        <div className="name-container">
          <input
            type="text"
            name="name"
            className="name-box"
            placeholder=" "
            value={name}
            onChange={handleChange(setName, "name")}
          />
          <label className="name-box-label">Write name here</label>
        </div>

        {/* Age Dropdown */}
        <div className="select-container">
          <select name="age" value={age} onChange={handleChange(setAge, "age")}>
            <option value="" disabled>Choose your age</option>
            <option value="Prefer not to say">Prefer not to say</option>
            {Array.from({ length: 100 }, (_, index) => index + 1).map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        {/* Job Dropdown */}
        <div className="select-container">
          <select name="job" value={job} onChange={handleChange(setJob, "job")}>
            <option value="" disabled>Choose your job</option>
            <option value="Student">Student</option>
            <option value="Student & Employed">Student & Employed</option>
            <option value="Full Time Employed">Full Time Employed</option>
            <option value="Part Time Employed">Part Time Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        {/* Gender Dropdown */}
        <div className="select-container">
          <select name="gender" value={gender} onChange={handleChange(setGender, "gender")}>
            <option value="" disabled>Choose your pronouns</option>
            <option value="He">he/him</option>
            <option value="Her">she/her</option>
            <option value="They">they/them</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        {/* Past Mental Health Info */}
        <div className="history-textbox">
        <textarea
          name="past"
          placeholder="Enter any past mental health diagnoses, symptoms, intensity, or anything else relevant"
          value={past}
          onChange={handleChange(setPast, "past")}
        />
        </div>
      </div>

      {/* Navigation Buttons at Bottom */}
      <div className="button-container">
        <Link to="/">
          <button>Go to Home Page</button>
        </Link>
        <Link to="/chat">
          <button>Go to Chat Page</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
