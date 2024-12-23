import React from "react";

const Input = (props) => {
  const { type, placeholder, name } = props;
  return (
    <div>
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        name={`${name}`}
        id={`${name}`}
        className="text-sm border border-sky-400 rounded w-full py-2 px-3 text-slate-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-2 placeholder:px-2 placeholder:opacity-70"
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
