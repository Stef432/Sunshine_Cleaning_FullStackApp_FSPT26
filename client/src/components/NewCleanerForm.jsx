import React from "react";

export default function NewCleanerForm({ handleClick }) {
  return (
    <>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="last-name">Last name</label>
          <input type="text" id="last-name" name="last-name" />

          <label htmlFor="email">your email</label>
          <input type="text" id="email" name="email" />

          <label htmlFor="am">Mornings</label>
          <input type="checkbox" id="am" value="morning" />

          <label htmlFor="pm">Afternoon</label>
          <input type="checkbox" id="pm" value="afternoon" />

          <button type="submit" name="submit" onClick={handleClick}>
            Add
          </button>
        </div>
      </form>
    </>
  );
}
