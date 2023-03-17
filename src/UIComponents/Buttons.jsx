import React from "react";

function Buttons({ text, icon, link }) {
  const downloadCV = (link) => {
    var element = document.createElement("a");
    element.setAttribute("href", link);
    element.setAttribute("download", "Mishael Dada's CV");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  };
  return (
    <div>
      <button
        className="flex justify-center items-center py-[1.5rem] px-[4rem] bg-[#363636] dark:!text-[#363636] dark:!bg-white rounded-[1rem] text-white gap-[1rem] capitalize text-[2rem] mb-4"
        onClick={() => link && downloadCV(link)}
      >
        {text}
        {icon}
      </button>
    </div>
  );
}

export default Buttons;
