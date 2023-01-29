import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import LogoWeb from "../../components/logos/LogoWeb";
import { IAccount } from "../../interfaces";
import { RootState } from "../../redux/store";
import { register } from "../../redux/users/authSlice";
import { ROUTER_PATH } from "../../routers/router";

const RegisterPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { loading, isRegister } = useSelector(
    (state: RootState) => state.authSlice
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRefister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const account: IAccount = { email, password };
    const userName = email.split("@")[0];

    const payload = {
      ...account,
      role: "user",
      name: userName,
    };
    dispatch(register(payload));
  };

  useEffect(() => {
    document.title = "Register Page";
  }, []);

  useLayoutEffect(() => {
    if (isRegister) {
      navigate(ROUTER_PATH.LOGIN);
    }
  }, [isRegister, navigate]);
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
        <Button className="btn-register">
          {" "}
          {loading ? (
            <span className=" w-5 h-5 border-y-transparent border-y-2 animate-spin m-auto border-white rounded-full border-x-2 block"></span>
          ) : (
            "Register"
          )}
        </Button>
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
