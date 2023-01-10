
import axios from "axios";

// import { SignupProps, LoginProps } from "../types";




// const baseURL = `${process.env.BASE_URL}`;
const baseURL = process.env.BASE_URL || "http://34.224.99.151:8000/api/v1";
const user = typeof window !== "undefined" && localStorage.getItem("userInfo")
  ? //    @ts-ignore
  JSON.parse(localStorage.getItem("userInfo")) || ""
  : "";
  const token = user ?  user.tokens.access : null
  

export default axios.create({
  baseURL,
    headers: { "Content-Type": "application/json" },
  
});


export const axiosPrivate = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});




