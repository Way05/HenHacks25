import React from 'react';
import { Link } from 'react-router-dom';
/*TODO
Profile Page: 
Age x 
Occupation x 
Gender x 
Past symptoms including duration, intensity, and triggers
Social and environmental factors
Direct to profile page if never been to web before
*/
const ProfilePage: React.FC = () => {
  return (
    <div>
      <h1>Edit Your Profile</h1>
      <textarea name="name" placeholder="Enter your name here" />
      <select name="age">
        <option value="" disabled selected>Choose your age</option>
        <option value="Prefer not to say">Prefer not to say</option>
        {Array.from({ length: 100 }, (_, index) => index + 1).map(age => (
            <option key={age} value={age}>{age}</option>
        ))}
       </select>


      <select name="job">
        <option value="" disabled selected>
            Choose your job
        </option>
        <option value="Student">Student</option>
        <option value="Student & Employed">Student & Employed</option>
        <option value="Full Time Employed">Full Time Employed</option>
        <option value="Part Time Employed">Part Time Employed</option>
        <option value="Unemployed">Unemployed</option>
        <option value="">Prefer not to say</option>
    </select>

    <select name="gender">
        <option value="" disabled selected>
            Choose your pronouns
        </option>
        <option value="He">he/him</option>
        <option value="Her">she/her</option>
        <option value="They">them/they</option>
        <option value="Other">Other</option>
        <option value="">Prefer not to say</option>

    </select>

    <textarea name="Past" placeholder="Enter any past mental health diagnoses, symptoms, intensity or anything else that may be relevant to you mental health" />

    <div>
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
