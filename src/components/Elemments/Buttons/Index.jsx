import React from "react";

const ButtonElements = ({ props, colorText, text }) => {
  const colors = {
    red: "bg-red-500 hover:bg-red-700",
    green: "bg-green-500 hover:bg-green-700",
    blue: "bg-blue-500 hover:bg-blue-700",
  };

  const warna = {
    white: "text-white",
    blue: "text-blue-400",
  };
  return (
    <div>
      <button
        className={`h-10 px-6 font-semibold rounded-md ${colors[props]} ${warna[colorText]}`}
      >
        {text || "Button"}
      </button>
    </div>
  );
};

export default ButtonElements;
