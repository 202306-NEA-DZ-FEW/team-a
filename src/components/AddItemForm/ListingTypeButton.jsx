import React from "react";

function ListingTypeButton({ text, selected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(text)}
      type='button'
      className={`${
        selected === text ? "bg-secondary " : "bg-black"
      } px-3 py-2 flex-1 text-sm font-light rounded-lg text-white`}
    >
      {text}
    </button>
  );
}

export default ListingTypeButton;
