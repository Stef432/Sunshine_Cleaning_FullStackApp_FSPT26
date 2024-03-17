import React from "react";
import NewCleanerForm from "./NewCleanerForm";

export default function AdminView({ setCleaner }) {
  async function addCleaner(cleaner) {
    let options = {
      method: "POST",
      body: JSON.stringify(cleaner),
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      let response = await fetch(`api/cleaners/add`, options);
      if (response.ok) {
        let newCleaner = await response.json();
        setCleaner(newCleaner);
      } else {
        console.log(`Server Error: ${response.status}`);
      }
    } catch (err) {
      console.log(`Server Error: ${err.message}`);
    }
  }
  return (
    <div>
      <NewCleanerForm addCleaner={addCleaner} />
    </div>
  );
}
