import React, { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import NewCleanerForm from "./components/NewCleanerForm";
import "./App.css";
import CleanerList from "./components/CleanerList";

function App() {
  let [cleaner, setCleaner] = useState([]);

  async function addCleaner(cleaner) {
    let options = {
      method: "POST",
      body: JSON.stringify(cleaner),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(`api/cleaners/add`, options);
      if (response.ok) {
        let cleaner = await response.json();
        setCleaner(cleaner);
      } else {
        console.log(`Server Error: ${response.status}`);
      }
    } catch (err) {
      console.log(`Server Error: ${err.message}`);
    }
  }

  //this is deleting existing info in dB
  async function removeCleaner(id) {
    let options = {
      method: "DELETE",
      body: JSON.stringify(cleaner),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(`/cleaners/${id}`, options);
      if (response.ok) {
        let cleaner = await response.json();
        removeCleaner(cleaner);
      } else {
        console.log(`Server Error: ${response.status}`);
      }
    } catch (err) {
      console.log(`Server Error: ${err.message}`);
    }
  }

  return (
    <div className="App">
      <img src={Sunshine} className="logo" alt="Sunshine-logo" size={80} />

      <h1>Hi {cleaner.cleaner}!</h1>
      <h2>Enter your availability</h2>
      <NewCleanerForm addCleaner={addCleaner} />
      <CleanerList cleaner={cleaner} />
    </div>
  );
}
export default App;
