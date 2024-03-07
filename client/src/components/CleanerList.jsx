import React from "react";

export default function CleanerList(props) {
  return (
    <div>
      props.cleaners.map(item => (
      <div key={item.id}>
        <div className="cleaner-list">
          <button
            type="button"
            name="delete"
            onClick={(e) => props.deleteCleaner(item.id)}
          >
            x
          </button>
        </div>
      </div>
      ))
    </div>
  );
}
