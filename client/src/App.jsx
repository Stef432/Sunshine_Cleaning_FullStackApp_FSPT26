import { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import NewCleanerForm from "./components/NewCleanerForm";
import "./App.css";

function App() {
  const [availability, setAvailability] = useState(0);

  useEffect();//to display the list at first load

  async function addAvailability(id) {
    let options = {
      method: "POST"
    };
    try {
      let response = await fetch(`/cleaners/add/${id}`, options);
      if(response.ok) {
        let availability = await response.json();
        setAvailability(availability);
      } else {
        console.log(`Server Error: ${response.status}`);
    } }
    catch (err) {
      console.log(`Server Error: ${err.message}`);
    }
  }

  async function deleteAvailability(id) {
    let options = {
      method: "DELETE"
    };
    try {
      let response = await fetch(`/cleaners/add/${id}`, options);
      if(response.ok) {
        let availability = await response.json();
        setAvailability(availability);
      } else {
        console.log(`Server Error: ${response.status}`);
      } }
      catch (err) {
        console.log(`Server Error: ${err.message}`);
      }
    }}
  
  
  return (
    <div className="App">
      <img src={Sunshine} className="logo" alt="Sunshine-logo" />
      <NewCleanerForm />
      <h1>Hi cleaner.name!</h1>
      <h2>Enter your availability</h2>
      <form>
        <label for="days">Days:</label>
        <select id="days" name="days">
          <option value="monday">Monday</option>
          <option value="tuesday">Tuedsay</option>
          <option value="wednesday">Wednesday</option>
          <option value="thursday">Thursday</option>
          <option value="friday">Friday</option>
          <option value="saturday">Saturday</option>
        </select>
      </form>
        <button
          onClick={e => setAvailability(e)}>
          Add to Calendar
        </button>
    </div>
)}
export default App;
