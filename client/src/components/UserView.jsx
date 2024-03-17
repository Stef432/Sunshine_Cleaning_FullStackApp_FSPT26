import React, { useState, useEffect } from "react";
import CleanerList from "./CleanerList";

export default function UserView({ cleaner, removeCleaner }) {
  const [cleaners, setCleaners] = useState([]);

  // Function to fetch the list of cleaners when the component mounts

  useEffect(() => {
    async function getCleaners() {
      try {
        const response = await fetch("/api/cleaners");
        if (!response.ok) {
          throw new Error("No luck getting the list of cleaners.");
        }
        const data = await response.json();
        setCleaners(data.data); // Set the fetched cleaners to the state
      } catch (error) {
        console.error("Error fetching cleaners:", error);
      }
    }
    getCleaners();
  }, []); // Empty dependency array to ensure the effect runs only once, when the component mounts

  return (
    <div>
      <h2>Active team members</h2>
      <CleanerList cleaner={(cleaner, removeCleaner)} />
    </div>
  );
}
