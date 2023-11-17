import React from "react";

function ListingTypeButton({ value, text, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(value)}
      type='button'
      className={`${
        selected === value ? "bg-accent text-white" : "bg-base-300"
      } px-3 py-2 flex-1 text-sm font-light rounded-lg`}
    >
      {text}
    </button>
  );
}

export default ListingTypeButton;
