import React, { ReactNode } from "react";
import "./form.scss";

interface Ifrom {
  children: ReactNode;
  className: String;
  handleSubmit: (e: React.SyntheticEvent) => void;
}

const Form = ({ children, className, handleSubmit }: Ifrom) => {
  return (
    <form className={`form-control ${className}`} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
