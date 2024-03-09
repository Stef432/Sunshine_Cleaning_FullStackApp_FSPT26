import React, { useRef } from "react";

export default function NewCleanerForm({ addCleaner }) {
  const firstNameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    addCleaner(firstNameRef.current.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" ref={firstNameRef} />

          {/* <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" />

          <label htmlFor="email">your email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="day-time">Day time</label>
          <select id="day-time" name="day-time">
            <option value="all">All day</option>
            <option value="am">Mornings</option>
            <option value="pm">Afternoon</option>
          </select>
          <label htmlFor="days">Days:</label>
          <select id="days" name="days">
            <option value="mon">Monday</option>
            <option value="tuesday">Tuedsay</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select> */}
          <button onClick={handleSubmit}>Add to Calendar</button>
        </div>
      </form>
    </>
  );
}
