import React from "react";
import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import LogoWeb from "../../components/logos/LogoWeb";
import { ROUTER_PATH } from "../../routers/router";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <Form className="login" handleSubmit={handleLogin}>
        <h1 className="title-login">Sign in</h1>
        <div
          className="logo"
          onClick={() => {
            navigate(ROUTER_PATH.HOME);
          }}
        >
          <LogoWeb></LogoWeb>
          <h3 className="logo-title">Besnik</h3>
        </div>
        <p className="description">
          Sign in and start managing your candidates!
        </p>
        <Input placeholder="Please enter your email address"></Input>
        <Input placeholder="Please enter your password"></Input>
        <Button className="btn-login">Login</Button>
        <p className="title-bottom">
          <span
            className="to-register"
            onClick={() => navigate(ROUTER_PATH.RESGITER)}
          >
            Register
          </span>
        </p>
      </Form>
    </>
  );
};

export default LoginPage;
