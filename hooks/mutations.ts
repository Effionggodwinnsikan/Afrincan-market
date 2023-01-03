import { useMutation } from "react-query";
import  { createNewUser } from "../api/axios";
// import { SignupProps } from "../types";

// :SignupProps

// export const postSignUp = useMutation((userData:SignupProps)=> {
//     return createNewUser(userData)
// });
// export const postSignUp = useMutation(createNewUser);

export function postSignUp() {
    const { data, mutate, isError, error } = useMutation(createNewUser);
   
    return {data, mutate, isError, error}
}


// ex.port function() { postSignUp }