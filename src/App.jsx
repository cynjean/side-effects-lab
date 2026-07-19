import './App.css'
import React, { useState, useEffect } from "react";

//State for the user's name 
function App() {
  const [userName, setUserName] = useSate("Guest");
  //State for fetched user data
  const [userData, setUserData] = useState(null);
  //Update the document title
  useEffect(() => {
    document.title = `Welcome, ${userName}`;
  }, [userName]);
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      />
    </div>
  );
  
}