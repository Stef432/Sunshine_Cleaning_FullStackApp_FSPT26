import React from "react";

export default function CleanerList(props) {
  return (
    <div className="CleanerList">
        <ul>
        {props.cleaners.map((item) => (
      <li key={item.id}>
          <button
            type="button"
            name="delete"
            onClick={(e) => props.deleteCleaner(item.id)}
          >
            x
          </button>
        </li>
        </ul>

    
    
        );
    </div>
}
