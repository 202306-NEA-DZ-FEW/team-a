import React from "react";
import { MdFilterListOff } from "react-icons/md";

function ClearFilterButton({ t, handleClearFilters }) {
  return (
    <button
      onClick={handleClearFilters}
      className='btn btn-sm rounded-full btn-neutral normal-case font-light tracking-wider'
    >
      <MdFilterListOff />
      {t("productsPage:clearFilter")}
    </button>
  );
}

export default ClearFilterButton;
