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
  //Fetch Data on Component Mount
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
      setUserData(data);
    })
    .catch(error => console.error("Error fetching user:", error));
  }, []);
  return (
    <div>
      <h1>Hello, {userName}!</h1>
      <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
      />
      {userData && (
        <div>
          <h2>User Info</h2>
          <p>Nmae:{userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      )}
    </div>
  );
  
}