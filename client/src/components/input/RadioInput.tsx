import { ChangeEvent, Dispatch, SetStateAction } from "react";
import "./input.scss";

interface IRadioInput {
  name: string;
  value: string;
  className?: string;
  isChecked?: boolean;
  control: Dispatch<SetStateAction<string>>;
}

const RadioInput = ({
  className,
  value,
  name,
  isChecked = false,
  control,
}: IRadioInput) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    control(value);
  };
  return (
    <div className={`${className} radio-input`}>
      <label htmlFor={value}>{value}</label>
      <input
        onChange={handleChange}
        name={name}
        type="radio"
        value={value}
        id={value}
        checked={isChecked}
      />
    </div>
  );
};

export default RadioInput;
