import { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import NewCleanerForm from "./components/NewCleanerForm";
import "./App.css";

function App() {
  //set the initial state of your main information variables:
  const [cleaner, setCleaner] = useState({
    name: "",
    lastname: "",
    email: "",
    days: "",
    time: "",
  });

  // let isName = cleaner.name;

  function addCleaner({ cleaner }) {
    console.log({ cleaner });
    setCleaner(cleaner);
  }

  //this is how to add new info in cleaners list
  /*  function handleClick(e) {
    e.prevent.default();
    let newCleaner = e.NewCleanerForm.value;
    alert("Cleaner added to the team!");
    setCleaners(...cleaners, newCleaner);
  } */

  //this is adding new info in dB
  async function addAvailability(id) {
    let options = {
      method: "POST",
    };
    try {
      let response = await fetch(`api/cleaners/add/${id}`, options);
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
    </div>
  );
}
export default App;
