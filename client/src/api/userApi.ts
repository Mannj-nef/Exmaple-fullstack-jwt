import { IUser, IUserApi } from "../interfaces";
import axiosClient from "../utils/axiosClient";

const UserApi = {
  getAllUser: async (token: string): Promise<IUser[] | void> => {
    if (!token) return;
    const { data } = await axiosClient.get("/users", {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    return data;
  },
  getUserById: async (id: string, token: string): Promise<IUser> => {
    const { data } = await axiosClient.get(`users/${id}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    return data;
  },
  login: async (user: { email: string; password: string }) => {
    const { data } = await axiosClient.post("/users/login", user);
    return data;
  },
  register: async (user: IUser) => {
    const { data } = await axiosClient.post("/users/register", user);
    return data;
  },
  updateUser: async (
    id: string,
    user: IUser,
    token: string
  ): Promise<IUserApi> => {
    const { data } = await axiosClient.put(`users/${id}`, user, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    return data;
  },
  deleteUser: async (id: string, token: string) => {
    const { data } = await axiosClient.delete(`users/${id}`, {
      headers: {
        token: `Bearer ${token}`,
      },
    });
    return data;
  },
};

export default UserApi;
