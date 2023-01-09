import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import ClearIcon from "@mui/icons-material/Clear";
import Button from "@mui/material/Button";
import ModalContainer from "../../ModalContainer";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { LoginUser } from "../../../hooks/mutations";
import { Store } from "../../../context/store";

interface LoginProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: () => void;
}

interface FormProps {
  email: string;
  password: string;
}

// const resolver: Resolver<FormProps> = async (values) => {
//   return {
//     values: values.email ? values : {},
//     errors: !values.email
//       ? {
//           firstName: {
//             type: "required",
//             message: "This is required.",
//           },
//         }
//       : {},
//   };
// };

// const defaultValues: FormProps = {
//   email: "",
//   password: ""
// }

export const Login: React.FC<LoginProps> = ({ open, onClose, setOpen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const router = useRouter();
  const { dispatch } = useContext(Store);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>();
  const { mutate, isError, error } = useMutation(LoginUser, {
    onSuccess: (data) => {
      console.log(data);
      dispatch({ type: "USER_LOGIN", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));
      enqueueSnackbar("Logged in successfully ", {
        variant: "success",
      });

      if (router.pathname === "/") router.push("/restaurants");

      setOpen(!open);
    },
  });

  function submitForm({ email, password }: FormProps) {
    closeSnackbar();
    //  @ts-ignore
    if (isError && error.response.status === 401) {
      console.log(error);
      //  @ts-ignore
      enqueueSnackbar(`${error.response.data.detail}`, { variant: "error" });
      return;
    } else {
      mutate({
        email,
        password,
      });
    }
    console.log(error);
  }

  // useEffect(() => {
  //  reset()
  // }, [reset])

  return (
    <>
      <ModalContainer open={open} onClose={onClose}>
        <div className="flex flex-col border-0  rounded-xl p-4 relative gap-6  max-w-[31.25rem] w-full bg-white overflow-hidden shadow-modalContent md:rounded-2xl z-[102]">
          <div className="flex flex-col gap-4">
            <div className="flex justify-end items-center relative h-[30px] w-full z-10 bg-white">
              <button
                className="flex items-center justify-center bg-[#E4E4E4] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                onClick={onClose}
              >
                <ClearIcon fontSize="inherit" />
              </button>
            </div>
            <h2 className="text-2xl text-maintxt font-semibold">
              Log in to your account
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <form
              onSubmit={handleSubmit(submitForm)}
              className="flex flex-col gap-4"
            >
              <Controller
                name="email"
                defaultValue=""
                control={control}
                rules={{
                  required: true,
                  pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                }}
                render={({ field }) => (
                  <FormControl
                    sx={{ width: "100%", borderWidth: "2px" }}
                    variant="outlined"
                    error={Boolean(errors.email)}
                  >
                    <InputLabel htmlFor="Email">Email</InputLabel>
                    <OutlinedInput
                      id="Email"
                      type="email"
                      inputProps={{ type: "type" }}
                      label="Email"
                      {...field}
                    />
                  </FormControl>
                )}
              />
              <div className="flex flex-col gap-2 items-left">
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: true,
                    minLength: 6,
                  }}
                  render={({ field }) => (
                    <FormControl
                      sx={{ width: "100%", borderWidth: "2px" }}
                      variant="outlined"
                      error={Boolean(errors.password)}
                    >
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <OutlinedInput
                        id="password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment
                            position="end"
                            onClick={() => setShowPassword(!showPassword)}
                            sx={{
                              cursor: "pointer",
                            }}
                          >
                            {showPassword ? (
                              <VisibilityOffIcon />
                            ) : (
                              <VisibilityIcon />
                            )}
                          </InputAdornment>
                        }
                        label="Password"
                        {...field}
                        sx={{
                          backgroundColor: "#fff",
                        }}
                      />
                      <span>
                        {errors.password ? (
                          errors.password.type === "minLength" ? (
                            <span style={{ color: "red", fontSize: 12 }}>
                              password is less than 6
                            </span>
                          ) : (
                            <span style={{ color: "red", fontSize: 12 }}>
                              password is required
                            </span>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </FormControl>
                  )}
                />
              </div>
              <Button type="submit" sx={{ width: "100%" }}>
                Login
              </Button>
            </form>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};

/* <p className=" text-xs">
              Please visit
              <Link href="/">
                <span className="text-primaryBtn font-semibold px-[2.5px]">
                  Wolt Privacy Statement
                </span>
              </Link>
              to learn more about personal data processing at Wolt. You can
              access the local Privacy Statement related to your Wolt account
              after you have provided the country and language preferences
              applicable to you during registration. This site is protected by
              hCaptcha. The hCaptcha
              <Link href="/">
                <span className="text-primaryBtn font-semibold  px-[2.5px]">
                  Privacy Policy
                </span>
              </Link>
              and
              <Link href="/">
                <span className="text-primaryBtn font-semibold  px-[2.5px]">
                  Terms of Service
                </span>
              </Link>
              apply.
            </p> */
