import React, { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import LogoWeb from "../../components/logos/LogoWeb";
import { ROUTER_PATH } from "../../routers/router";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<{}>({ email: "" });
  const [password, setPassword] = useState<{}>({
    password: "",
  });
  const handleRefister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const account = {
      ...email,
      ...password,
    };
  };
  return (
    <>
      <Form className="register" handleSubmit={handleRefister}>
        <h1 className="title-register">Sign up</h1>
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
          Sign up and start managing your candidates!
        </p>
        <Input
          control={setEmail}
          name="email"
          placeholder="Please enter your email address"
        ></Input>

        <Input
          type="password"
          control={setPassword}
          name="password"
          placeholder="Please enter your password"
        ></Input>
        <Button className="btn-register">Register</Button>
        <p className="title-bottom">
          <span
            className="to-login"
            onClick={() => navigate(ROUTER_PATH.LOGIN)}
          >
            Login
          </span>
        </p>
      </Form>
    </>
  );
};

export default RegisterPage;
