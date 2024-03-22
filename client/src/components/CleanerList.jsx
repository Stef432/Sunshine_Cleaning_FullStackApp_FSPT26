import React, { useState, useEffect } from "react";
import "./CleanerList.css";
export default function CleanerList() {
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    getCleaners();
  }, []); // Empty dependency array to ensure the effect runs only once, when the component mounts

  const getCleaners = async () => {
    try {
      const response = await fetch("/api/cleaners");
      if (!response.ok) {
        console.log(cleaners);
        console.error(
          "Error fetching cleaners:",
          response.status,
          response.statusText
        );
        throw new Error("Network error.");
      }
      const cleaners = await response.json();
      console.log(cleaners);
      setCleaners(cleaners); // Set the fetched data to the state variable
    } catch (err) {
      console.error("Server failed: ", err);
    }
  };

  async function removeCleaner(id) {
    try {
      const response = await fetch(`/api/cleaners/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        let cleaner = await response.json();
        setCleaners(cleaner.filter((cleaner) => cleaner.id !== id));
      } else {
        console.log(`Server Error: ${response.status}`);
      }
    } catch (err) {
      console.log(`Server Error: ${err.message}`);
    }
  }

  function handleDeleteCleaner(id) {
    const confirmDelete = window.confirm("Delete?");
    if (confirmDelete) {
      removeCleaner(id);
    }
  }
  return (
    <div className="CleanerList">
      <ul>
        <article>
          {cleaners.map((cleaner) => (
            <li key={cleaner.id} className="cleaners-list">
              <article>
                <h4>
                  {cleaner.last_name}, {cleaner.first_name}
                </h4>
                <p>Available day:</p>
                {cleaner.day} {cleaner.day_time}
                <button
                  type="button"
                  name="delete"
                  onClick={() => handleDeleteCleaner(cleaner.id)} // Pass the cleaner id to the removeCleaner function
                >
                  Delete
                </button>
              </article>
            </li>
          ))}
        </article>
      </ul>
    </div>
  );
}
