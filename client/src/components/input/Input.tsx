import React, { Dispatch, SetStateAction } from "react";
import "./input.scss";

interface Iinput {
  id?: string;
  className?: string;
  value?: string;
  placeholder?: string;
  name: string;
  type?: string;
  control: Dispatch<SetStateAction<string>>;
}

const Input = ({
  className,
  type = "text",
  placeholder,
  name,
  value,
  id = "",
  control,
}: Iinput) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    control(value);
  };

  return (
    <input
      id={id}
      value={value}
      name={name}
      type={type}
      className={`input-control ${className}`}
      placeholder={placeholder}
      onChange={handleChangeInput}
    />
  );
};

export default Input;
