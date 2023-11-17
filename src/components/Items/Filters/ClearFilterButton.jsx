import React from "react";
import { MdFilterListOff } from "react-icons/md";

function ClearFilterButton({ t, handleClearFilters }) {
  return (
    <button
      onClick={handleClearFilters}
      className='btn btn-sm btn-primary bg-opacity-40 rounded-full normal-case font-light tracking-wider'
    >
      <MdFilterListOff />
      {t("itemsPage:clearFilter")}
    </button>
  );
}

export default ClearFilterButton;
