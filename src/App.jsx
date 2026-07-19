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
  //Set up window click event listener
  useEffect(() => {
    const handleWindowClick = () => {
      console.log("Window was clicked!");
    };
    window.addEventListener("click", handleWindowClick);
    //Cleanup to remove the listener on unmount 
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
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

export default App; 