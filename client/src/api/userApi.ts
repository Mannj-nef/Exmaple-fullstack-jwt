import { IUser } from "../interfaces";
import axiosClient from "../utils/axiosClient";

const UserApi = {
  getAllUser: async () => {
    const { data } = await axiosClient.get("/users");
    return data;
  },
  login: async (user: { email: string; password: string }) => {
    const { data } = await axiosClient.post("/users/login", user);
    return data;
  },
  register: async (user: { email: string; password: string }) => {
    const { data } = await axiosClient.post("/users/register", user);
    return data;
  },
  updateuser: async (id: string, user: IUser) => {
    const { data } = await axiosClient.put(`users/${id}`, user);
    return data;
  },
  deleteUser: async (id: string) => {
    const codeMessage = await axiosClient.delete(`users/${id}`);
    return codeMessage;
  },
};

export default UserApi;
