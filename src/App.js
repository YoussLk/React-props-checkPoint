import './App.css';
import Profile from './Profile/Profile';
import React from 'react';

function App() {
  return (
    <div>
      <Profile fullName="LAKRIM Youssef" bio="Frontend Developer" profession="Software Engineer">
        <img src="profile-image.png" alt="Profile" />
      </Profile>
    </div>
  );
}


export default App;
