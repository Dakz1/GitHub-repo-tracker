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
      <h1>test</h1>
      <ul>
        <DisplayData apiData={apiData}/>
      </ul>
    </>
  );
}

export default App;
