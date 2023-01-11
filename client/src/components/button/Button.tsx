import { ReactNode } from "react";
import "./button.scss";

interface IButton {
  className?: String;
  children: ReactNode;
  handleClick?: () => void;
}

const Button = ({ className, children, handleClick }: IButton) => {
  return (
    <button className={`btn ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
