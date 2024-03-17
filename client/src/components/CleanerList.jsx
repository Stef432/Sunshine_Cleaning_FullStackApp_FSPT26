import React, { useState, useEffect } from "react";

export default function CleanerList() {
  const [cleaners, setCleaners] = useState([]);

  useEffect(() => {
    getCleaners();
  }, []); // Empty dependency array to ensure the effect runs only once, when the component mounts

  const getCleaners = async () => {
    try {
      const response = await fetch("/api/cleaners");
      if (!response.ok) {
        console.error(
          "Error fetching cleaners:",
          response.status,
          response.statusText
        );
        throw new Error("Network error.");
      }
      const cleaners = await response.json();
      console.log(cleaners.data);
      setCleaners(cleaners.data); // Set the fetched data to the state variable
    } catch (err) {
      console.error("Server failed: ", err);
    }
  };

  async function removeCleaner(id) {
    try {
      const response = await fetch(`/cleaners/${id}`, { method: "DELETE" });
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

  const handleDeleteCleaner = () => {
    const confirmDelete = window.confirm("Delete?");
    if (confirmDelete) {
      removeCleaner(cleaners.id);
    }
  };
  return (
    <div className="CleanerList">
      <ul>
        {cleaners.map((cleaner) => (
          <li key={cleaner.id} className="cleaners-list">
            {/* Assuming cleaner has a property id */}
            <p>{cleaner.first_name}</p>
            {/* Render other cleaner properties as needed */}
            <button
              type="button"
              name="delete"
              onClick={handleDeleteCleaner} // Pass the cleaner id to the removeCleaner function
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
