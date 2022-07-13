import React, {useState} from 'react';
import {API, DisplayData, UserData, SearchBar} from './Components'; 
import './App.css';

function App() {
  const [apiData, setApiData] = useState([]);
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <SearchBar setUserInput={setUserInput}/>
      <API userInput={userInput} setApiData={setApiData}/>
      <UserData apiData={apiData}/>
      {apiData.length > 0 ? <h1>User Repositories</h1> : <h3>Please enter a valid Github Username</h3>}
      <ul>
        <DisplayData apiData={apiData}/>
      </ul>
    </>
  );
}

export default App;
