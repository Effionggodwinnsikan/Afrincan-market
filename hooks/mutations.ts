import axios, { axiosPrivate } from "../axios/axios";

import { LoginProps, SignupProps } from "../types";

interface Logout {
  refresh: string;
}

export const createNewUser = (userData: SignupProps) => {
  return axios.post("/register", userData).then((res) => res.data);
};

export const LoginUser = (userData: LoginProps) => {
  return axios.post("/login", userData).then((res) => res.data);
};

export const LogoutUser = (refresh: Logout) => {
  return axiosPrivate.post("/logout", refresh).then((res) => res.data);
};

