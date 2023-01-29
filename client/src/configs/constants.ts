import { ToastOptions } from "react-toastify";

interface IToastType {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: string;
}

interface Role_type {
  ADMIN: string;
  USER: string;
}

export const TOAST_TYPE: ToastOptions<IToastType> = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const ROLE_TYPE: Role_type = {
  ADMIN: "admin",
  USER: "user",
};
