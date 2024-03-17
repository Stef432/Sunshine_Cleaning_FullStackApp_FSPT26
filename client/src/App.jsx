import React, { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import AdminView from "./components/AdminView";
import "./App.css";
import UserView from "./components/UserView";

function App() {
  const [cleaner, setCleaner] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);

  function changeViews() {
    setIsAdmin((admin) => !admin);
  }

  /* handleChange(e) {
    e.preventDefault();
    const searchInputName = {
      cleaner: 
      //cleaner :searchInputNameRef.current.value
    }
    
  } */

  return (
    <div className="App">
      <img src={Sunshine} className="logo" alt="Sunshine-logo" size={80} />

      <h1>Hi there!</h1>

      {isAdmin ? (
        <UserView cleaner={cleaner} />
      ) : (
        <AdminView setCleaner={setCleaner} cleaner={cleaner} />
      )}
      <button type="button" onClick={changeViews}>
        {isAdmin ? "Add a cleaner" : "Back to User View"}{" "}
      </button>

      <form className="d-flex me-3" /* onSubmit={handleSubmit} */>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          label="Search"
          /* handleChange={handleChange} */
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default App;
