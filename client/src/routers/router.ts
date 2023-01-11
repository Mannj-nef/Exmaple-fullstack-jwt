import { lazy } from "react";

const Home = lazy(() => import("../pages/home"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const Users = lazy(() => import("../pages/users"));

export const ROUTER_PATH = {
  HOME: "/",
  USER: "/user",
  LOGIN: "/login",
  RESGITER: "/resgiter",
};

const routers = [
  {
    path: ROUTER_PATH.HOME,
    component: Home,
  },
  {
    path: ROUTER_PATH.USER,
    component: Users,
  },
  {
    path: ROUTER_PATH.LOGIN,
    component: Login,
    loginLayout: true,
  },
  {
    path: ROUTER_PATH.RESGITER,
    component: Register,
    loginLayout: true,
  },
];

export default routers;
