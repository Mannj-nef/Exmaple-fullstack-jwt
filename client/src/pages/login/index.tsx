import { AnyAction } from "@reduxjs/toolkit";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router";
import Button from "../../components/button/Button";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import LogoWeb from "../../components/logos/LogoWeb";
import { getUser, setLogin } from "../../redux/users/authSlice";
import { ROUTER_PATH } from "../../routers/router";
import { IAccount } from "../../interfaces";
import LoginSuccess from "./LoginSuccess";
import { RootState } from "../../redux/store";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { user, loading, isLogin } = useSelector(
    (state: RootState) => state.authSlice
  );

  const navigate: NavigateFunction = useNavigate();
  const dispatch: React.Dispatch<AnyAction> = useDispatch();

  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const account: IAccount = { email, password };
    const payload = {
      ...account,
    };
    dispatch(setLogin(payload));
  };

  useEffect(() => {
    document.title = "Login Page";
    dispatch(getUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (isLogin) {
      navigate(ROUTER_PATH.HOME);
    }
  }, [isLogin, navigate]);

  return (
    <>
      {user ? (
        <LoginSuccess></LoginSuccess>
      ) : (
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
          <Button className="btn-login">
            {loading ? (
              <span className=" w-5 h-5 border-y-transparent border-y-2 animate-spin m-auto border-white rounded-full border-x-2 block"></span>
            ) : (
              "Login"
            )}
          </Button>
          <p className="title-bottom">
            <span
              className="to-register"
              onClick={() => navigate(ROUTER_PATH.RESGITER)}
            >
              Register
            </span>
          </p>
        </Form>
      )}
    </>
  );
};

export default LoginPage;
