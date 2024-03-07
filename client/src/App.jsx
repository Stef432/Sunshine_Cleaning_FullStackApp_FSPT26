import { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import NewCleanerForm from "./components/NewCleanerForm";
import "./App.css";

function App() {
  const [availability, setAvailability] = useState(0);

  async function addAvailability(id) {
    let options = {
      method: "GET";
      body: {name:, last-name:, email:, am:, pm:,}
    };
    try {
      let response = await fetch(`/api/add/${id}`, options);
      if(response.ok) {
        let availability = await response.json();
        setAvailability(availability);
      } else {
        console.log(`Server Error: ${response.status}`)
      } catch (err)
    }
  }

  async function deleteAvailability(id) {
    let options = {
      method: "DELETE";
    };
    try {
      let response = await fetch(`/api/add/${id}`, options);
      if(response.ok) {
        let availability = await response.json();
        setAvailability(availability);
      } else {
        console.log(`Server Error: ${response.status}`);
      } catch (err) {
        console.log(`Server Error: ${err.message}`);
      }
    }
  }

  
  
  return (
    <div className="App">
      
      <navbar></navbar>

        <img src={Sunshine} className="logo" alt="Sunshine-logo" />
        <NewCleanerForm />
      </div>
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
      <div className="card">
        <button
          onClick={() => setAvailability((availability) => availability + 1)}
        >
          Add to Calendar
        </button>
        <p>Take a look at your Calendar</p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
