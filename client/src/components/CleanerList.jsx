import React from "react";

export default function CleanerList({ cleaner, removeCleaner }) {
  return (
    <div className="CleanerList">
      <ul>
        {cleaner.map((item, id) => (
          <li key={item.id} className="cleaners-list">
            <button
              type="button"
              name="delete"
              onClick={(e) => props.removeCleaner(id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <form className="d-flex me-3">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
