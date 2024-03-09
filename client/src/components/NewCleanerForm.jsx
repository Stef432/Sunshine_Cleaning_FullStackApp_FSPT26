import React, { useRef } from "react";

export default function NewCleanerForm({ addCleaner }) {
  const firstNameRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const dayTimeInputRef = useRef();
  const dayInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const cleaner = {
      cleaner: firstNameRef.current.value,
      lastName: lastNameInputRef.current.value,
      email: emailInputRef.current.value,
      time: dayTimeInputRef.current.value,
      day: dayInputRef.current.value,
    };
    addCleaner({ cleaner });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={firstNameRef} />

          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            ref={lastNameInputRef}
          />

          <label htmlFor="email">your email</label>
          <input type="text" id="email" name="email" ref={emailInputRef} />

          <label htmlFor="day-time">Day time</label>
          <select id="day-time" name="day-time" ref={dayTimeInputRef}>
            <option value="all">All day</option>
            <option value="am">Mornings</option>
            <option value="pm">Afternoon</option>
          </select>
          <label htmlFor="days">Days:</label>
          <select id="days" name="days" ref={dayInputRef}>
            <option value="mon">Monday</option>
            <option value="tuesday">Tuedsay</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
          <button onClick={handleSubmit}>Add to the team</button>
        </div>
      </form>
    </>
  );
}
