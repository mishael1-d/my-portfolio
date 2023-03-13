import React from "react";

function Buttons({ text, icon }) {
  return (
    <div>
      <button className="flex justify-center items-center py-[1.5rem] px-[4rem] bg-[#363636] rounded-[1rem] text-white gap-[1rem] capitalize text-[2rem] mb-4">
        {text}
        {icon}
      </button>
    </div>
  );
}

export default Buttons;
