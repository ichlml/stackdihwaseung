import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = (props) => {
  const { label, type, placeholder, name, id } = props;
  return (
    <div>
      <div className="mb-4">
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} placeholder={placeholder} name={name} id={name} />
      </div>
    </div>
  );
};

export default InputForm;
