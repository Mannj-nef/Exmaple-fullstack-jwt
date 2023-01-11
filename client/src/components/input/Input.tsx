import React from "react";
import "./input.scss";

interface Iinput {
  className?: string;
  placeholder: string;
}

const Input = ({ className, placeholder }: Iinput) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <input
      className={`input-control ${className}`}
      placeholder={placeholder}
      onChange={handleChangeInput}
    />
  );
};

export default Input;
