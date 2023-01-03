import axios from "axios";
import { SignupProps, LoginProps } from "../types";



// const baseURL = `${process.env.BASE_URL}`;
const baseURL = "http://34.224.99.151/api/v1";
// const token = localStorage.getItem("token")

export const api = axios.create({
  baseURL,
    headers: { "Content-Type": "application/json" },
  
});


// export const axiosPrivate = axios.create({
//   baseURL,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${token}`,
//   },
// });

export const createNewUser = (userData: SignupProps) => {
  return api.post("/register", userData);
};
export const LoginUser = (userData: LoginProps) => {
  return api.post("/login", userData);
};


