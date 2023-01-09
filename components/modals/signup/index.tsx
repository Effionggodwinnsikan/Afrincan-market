import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import Link from "next/link";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import ModalContainer from "../../ModalContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useSnackbar } from "notistack";
import { useMutation } from "react-query";
import { useForm, Controller } from "react-hook-form";
import { createNewUser } from "../../../hooks/mutations";

interface FormProps {
  username: string;
  email: string;
  password: string;
  verifyPwd: string;
}

interface SignupProps {
  open: boolean;
  onClose?: () => void;
}

export const Register: React.FC<SignupProps> = ({ open, onClose }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>();

  const { mutate, isError, error } = useMutation(createNewUser, {
    onSuccess: (data) => {
      console.log(data);
      enqueueSnackbar(
        "Verification link has been  sent to your email address",
        {
          variant: "success",
        }
      );
    },
  });
  // console.log(data)

  // function handleUserName(e: React.ChangeEvent<HTMLInputElement>) {
  //   if (e.target.value.length >= 1) setOpenOptions(true);
  //   else if (e.target.value.length === 0) setOpenOptions(false);

  // }

  function submitForm({ username, email, password, verifyPwd }: FormProps) {
    closeSnackbar();
    if (password != verifyPwd) {
      enqueueSnackbar("Passwords don't match", { variant: "error" });
      return;
    }
    // if(isError) console.log(error)
    //  @ts-ignore
    else if (isError && error.response.status == 400) {
      //  @ts-ignore
      const usernameExist = isError //  @ts-ignore
        ? error.response.data.errors.username
        : null;
      //  @ts-ignore
      const emailExist = isError ? error.response.data.errors.email : null;

      if (emailExist == null && usernameExist)
        enqueueSnackbar(`${usernameExist}`, { variant: "error" });

      if (usernameExist == null && emailExist)
        enqueueSnackbar(`${emailExist}`, { variant: "error" });

      if (emailExist && usernameExist)
        enqueueSnackbar("User with username and email already exist", {
          variant: "error",
        });

      return;
    } else {
      mutate({
        email,
        username,
        password,
      });
    }
  }

  return (
    <>
      <ModalContainer open={open} onClose={onClose}>
        <div className="flex flex-col border-0  rounded-xl p-4 gap-6 max-w-[31.25rem] z-10 w-full bg-white  modalContent modal__content  md:rounded-2xl  overflow-scroll relative ">
          <div className="relative h-full">
            <div className="flex justify-end items-center w-full z-10 bg-white  relative">
              <button
                className="flex items-center justify-center bg-[#E4E4E4] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer sticky left-0 top-0"
                onClick={onClose}
              >
                <ClearIcon fontSize="inherit" />
              </button>
            </div>
          </div>
          <h2 className="text-2xl text-maintxt font-semibold">
            Create an account
          </h2>

          <div className="flex flex-col gap-4">
            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <Controller
                  name="username"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <FormControl
                      sx={{ width: "100%", borderWidth: "2px" }}
                      variant="outlined"
                      error={Boolean(errors.username)}
                    >
                      <InputLabel htmlFor="First-name">User Name</InputLabel>
                      <OutlinedInput
                        id="username"
                        {...field}
                        inputProps={{ type: "type" }}
                        label="Username"
                      />
                    </FormControl>
                  )}
                />
              </div>
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

              {/* Passwords */}
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

              <Controller
                name="verifyPwd"
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
                    error={Boolean(errors.verifyPwd)}
                  >
                    <InputLabel htmlFor="verify-password">
                      Verify password
                    </InputLabel>
                    <OutlinedInput
                      id="verify-password"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      // onChange={(e) => setVerifyPwd(e.target.value)}
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
                      label="Verify password"
                      sx={{
                        backgroundColor: "#fff",
                      }}
                    />
                  </FormControl>
                )}
              />

              {openOptions && (
                <>
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      name=""
                      id="agreement-terms"
                      className="border-primaryBtn border-2 outline-none w-[1.5rem] h-[1.5rem]"
                    />
                    <label htmlFor="agreement-terms">
                      I've read and agree with the User Terms of Service. I
                      understand that my personal data will be processed in
                      accordance with Wolt’s Privacy Statement.
                      <br />{" "}
                      <Link href="/">
                        <span className="text-primaryBtn"> Read More</span>
                      </Link>
                    </label>
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      name=""
                      id="agreement-data"
                      className="border-primaryBtn border-2 outline-none w-[1.5rem] h-[1.5rem]"
                    />
                    <label htmlFor="agreement-data">
                      Wolt can transfer my personal data that Wolt has collected
                      and processed to countries outside Azerbaijan.
                    </label>
                  </div>
                </>
              )}

              {/* <CheckBox name="privacy-agreement">aaaa</CheckBox> */}
              {/* <Checkbox label={checkLabel} /> */}
              <Button
                type="submit"
                // className="bg-primaryBtn border-0 outline-0 text-white text-base font-semibold rounded-lg py-[0.625rem] px-2"
                sx={{ width: "100%" }}
                // onClick={submitForm}
              >
                Register
              </Button>
            </form>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};
