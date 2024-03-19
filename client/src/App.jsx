import React, { useState, useRef } from "react";
import Sunshine from "./Sunshine.jpeg";
import AdminView from "./components/AdminView";
import "./App.css";
import UserView from "./components/UserView";

function App() {
  const [cleaner, setCleaner] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const searchCleanerInputRef = useRef();

  function changeViews() {
    setIsAdmin((admin) => !admin);
  }

  function handleChange(e) {
    e.preventDefault();
    const searchCleanerInput = { cleaner: input.current.value };
  }

  function showFeatured() {}

  function handleSubmit(e) {
    e.preventDefault();
    const cleanerSearch = {
      cleaner: searchCleanerInputRef.current.value,
    };
  }
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

      <form className="d-flex me-3" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          label="Search"
          onChange={(input) => handleChange(input)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default App;
