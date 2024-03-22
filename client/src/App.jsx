import React, { useState } from "react";
import Sunshine from "./Sunshine.jpeg";
import AdminView from "./components/AdminView";
import "./App.css";
import UserView from "./components/UserView";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./components/Toggle";

function App() {
  const [cleaner, setCleaner] = useState([]);
  const [isAdmin, setIsAdmin] = useState(true);
  const [searchInput, setSearchInput] = useState([]);
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  function changeViews() {
    setIsAdmin((admin) => !admin);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    cleaner.filter((cl) => {
      return cl.match(searchInput);
    });
  }

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <img src={Sunshine} className="logo" alt="Sunshine-logo" size={80} />
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <h1 className="title">Hi there!</h1>

      {isAdmin ? (
        <UserView cleaner={cleaner} />
      ) : (
        <AdminView setCleaner={setCleaner} cleaner={cleaner} />
      )}
      <button type="button" onClick={changeViews}>
        {isAdmin ? "Add a cleaner" : "Back to User View"}{" "}
      </button>
      <table>
        <tr>
          <th>Cleaner</th>
          <th>Availability</th>
        </tr>

        {cleaner.map((cl, id) => {
          <li key={id}>
            <td>{cl.name}</td>
            <td>{cl.last_name}</td>
          </li>;
        })}
      </table>
      <form className="d-flex me-3">
        <input
          type="search"
          name="search"
          placeholder="Search cleaner"
          value={searchInput}
          onChange={handleChange}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
export default App;
