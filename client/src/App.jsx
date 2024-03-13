import React, { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import NewCleanerForm from "./components/NewCleanerForm";
import "./App.css";
import CleanerList from "./components/CleanerList";

function App() {
  //set the initial state of your main information variables:
  const [cleaner, setCleaner] = useState([
    {
      id: 0,
      name: "stefa",
      lastname: "munari",
      email: "stefani@munari.com",
      days: "mondays",
      time: "afternoons",
    },
  ]);

  /* //async function addCleaner(id) {

    console.log(id);
    //setCleaner(id);
  } */

  //this is adding new info in dB
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

  async function deleteAvailability(id) {
    let options = {
      method: "DELETE",
    };
    try {
      let response = await fetch(`/cleaners/add/${id}`, options);
      if (response.ok) {
        let availability = await response.json();
        setAvailability(availability);
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

      <h1>Hi {cleaner.name}!</h1>
      <h2>Enter your availability</h2>
      <NewCleanerForm addCleaner={addCleaner} />
      <CleanerList cleaner={cleaner} />
    </div>
  );
}
export default App;
