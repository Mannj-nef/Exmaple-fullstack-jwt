import React, { ReactNode } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";

interface IDefaultLayout<T> {
  children?: T;
}

const DefaultLayout = ({ children }: IDefaultLayout<ReactNode>) => {
  return (
    <div className="container">
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
