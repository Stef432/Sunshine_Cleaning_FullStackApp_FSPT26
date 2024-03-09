import { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import NewCleanerForm from "./components/NewCleanerForm";
import "./App.css";

function App() {
  //set the initial state of your main information variables:
  const [cleaners, setCleaners] = useState({
    name: "",
    lastname: "",
    email: "",
    am: Boolean,
    pm: Boolean,
  });

  //useEffect(); //"fetch" from dB to display some initial cleaners when loading:

  //this is how to add new info in cleaners list
  function handleClick(e) {
    e.prevent.default();
    let newCleaner = e.NewCleanerForm.value;
    alert("Cleaner added to the team!");
    setCleaners(...cleaners, newCleaner);
  }

  //this is adding new info in dB
  async function addAvailability(id) {
    let options = {
      method: "POST",
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
      <NewCleanerForm handleClick={handleClick} />
      <h1>Hi cleaner.name!</h1>
      <h2>Enter your availability</h2>
      <form>
        <label htmlFor="days">Days:</label>
        <select id="days" name="days">
          <option value="monday">Monday</option>
          <option value="tuesday">Tuedsay</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </form>
      <button onClick={(e) => setAvailability(e)}>Add to Calendar</button>
    </div>
  );
}
export default App;
