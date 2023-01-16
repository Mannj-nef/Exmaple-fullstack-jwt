import { NavigateFunction } from "react-router-dom";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  gender: "male";
  role: "user";
  createdAt: string;
  updatedAt: string;
}

export interface IAccount {
  email: string;
  password: string;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface iNavigate {
  navigate: NavigateFunction;
}
export type actionLogin = IAccount & iNavigate;
