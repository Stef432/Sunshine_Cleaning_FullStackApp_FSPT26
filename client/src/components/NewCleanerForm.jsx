import React from "react";

export default function NewCleanerForm() {
  return (
    <>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" id="name" />
          <label for="last-name">Last name</label>
          <input type="text" id="last-name" />
          <label for="name">your email</label>
          <input type="text" id="name" />
          <label for="am">Mornings</label>
          <input type="checkbox" id="am" value="morning" />
          <label for="pm">Afternoon</label>
          <input type="checkbox" id="pm" value="afternoon" />
        </div>
      </form>
    </>
  );
}
