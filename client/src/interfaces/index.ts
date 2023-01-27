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

export interface IUserApi {
  user?: IUser;
  users?: IUser[] & void;
  codeMessage: string;
}
