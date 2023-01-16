import React, { Dispatch, SetStateAction } from "react";
import "./input.scss";

interface Iinput {
  className?: string;
  placeholder: string;
  name: string;
  type?: string;
  control: Dispatch<SetStateAction<string>>;
}

const Input = ({
  className,
  type = "text",
  placeholder,
  name,
  control,
}: Iinput) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    control(value);
  };

  return (
    <input
      name={name}
      type={type}
      className={`input-control ${className}`}
      placeholder={placeholder}
      onChange={handleChangeInput}
    />
  );
};

export default Input;
