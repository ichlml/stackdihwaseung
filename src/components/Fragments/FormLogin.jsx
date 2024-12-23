import React from "react";
import ButtonElements from "../Elemments/Buttons/Index";
import InputForm from "../Elemments/Inputs/Index";

const FormLogin = () => {
  return (
    <div>
      <form action="">
        <InputForm label="NIK" type="text" placeholder="NIK" name="nik" />
        <InputForm
          label="Password"
          type="password"
          placeholder="****"
          name="password"
        />
        <ButtonElements props="blue" colorText="white" text="Login" />
      </form>
    </div>
  );
};

export default FormLogin;
