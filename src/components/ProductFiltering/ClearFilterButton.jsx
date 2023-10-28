import { useRouter } from "next/router";
import React from "react";

function ClearFilterButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/products", undefined, { scroll: false });
      }}
      className='btn w-full md:w-40 bg-black text-white btn-sm px-4 rounded-xl'
    >
      Clear filter
    </button>
  );
}

export default ClearFilterButton;
