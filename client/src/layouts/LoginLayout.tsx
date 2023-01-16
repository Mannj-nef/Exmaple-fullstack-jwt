import React, { ReactNode } from "react";
import "./loginLayout.scss";

interface IloginLayout<T> {
  children: T;
}

const LoginLayout = ({ children }: IloginLayout<ReactNode>) => {
  return (
    <div className="flex flex-col items-center justify-center fixed inset-0">
      {children}
      <img src="/Vectors.png" className="w-full mt-auto" alt="" />
    </div>
  );
};

export default LoginLayout;
