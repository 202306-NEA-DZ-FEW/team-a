import React from "react";

function ListingTypeButton({ value, text, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(value)}
      type='button'
      className={`${
        selected === value ? "bg-primary text-white" : "bg-base-100"
      } px-3 py-2 flex-1 text-sm font-light rounded-lg shadow-md`}
    >
      {text}
    </button>
  );
}

export default ListingTypeButton;
