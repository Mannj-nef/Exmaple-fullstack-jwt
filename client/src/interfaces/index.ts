export interface IUser {
  _id: string;
  name: string;
  email: string;
  gender: "male";
  role: "user";
  createdAt: string;
  updatedAt: string;
}

export interface IAction {
  type: string;
  payload: any;
}
