import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import RootLayout from "../../../../layout/RootLayout";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import RemoveIcon from "@mui/icons-material/Remove";

const DeliverySwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 58,
  height: 40,
  padding: 2,
  margin: "0!important",
  borderRadius: "16px!important",

  "& .MuiSwitch-switchBase": {
    padding: 3.5,
    margin: 2,
    transitionDuration: "300ms",
    borderRadius: "8px!important",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#F6B01E" : "#F6B01E",
        opacity: 1,
        border: 0,
        borderRadius: "4px!important",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
        borderRadius: "4px!important",
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#F6B01E",
      border: "6px solid #fff",
      borderRadius: "4px!important",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
      borderRadius: "4px!important",
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      borderRadius: "4px!important",
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 26,
    height: 26,
    borderRadius: "4px!important",
  },
  "& .MuiSwitch-track": {
    width: 58,

    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 300,
    }),
  },
}));

const CalcButton = styled(Button)({
  backgroundColor: "#FDEFD2 !important",
  padding: "0",
  color: "#F6B01E !important",
  borderRadius: "999px",
  width: "1.5rem!important",
  minWidth: "1.5rem!important",
  height: "1.5rem",
  cursor: "pointer",

  "&:disabled": {
    backgroundColor: "transparent!important",
  },

  // "&.disabled": {
  //  backgroundColor: "transaprent",
  // }
});

const RestaurantCheckout = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col w-full h-[30rem] lg:h-[35vw] relative border-b-2">
        <div className="absolute top-0 left-0 right-0 flex flex-col justify-between  px-4 py-5 md:px-10 xl:px-0 md:pt-10 md:py-14 w-full max-w-6.5xl  m-auto my-0 h-full">
          <div>
            <Button
              startIcon={<KeyboardBackspaceIcon fontSize="small" />}
              variant="text"
              sx={{
                padding: "0!important",
                color: "#000000",
                minWidth: "max-content",
                textTransform: "capitalize",
              }}
              onClick={() => router.back()}
            >
              Back
            </Button>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-3xl md:text-6xl">Checkout</h2>
            <h4 className="font-semibold text-xl md:text-2xl">Kebab Royal</h4>
          </div>
        </div>
      </div>

      <section className="flex flex-col px-4 py-5 md:px-10 xl:px-0 md:py-20 w-full max-w-6.5xl  m-auto my-0 h-full lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-10 md:gap-20 w-full">
          {/* Delivery */}

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg md:text-2xl lg:text-3xl">
              Delivery method and time
            </h4>
            <ul className="flex flex-col gap-1">
              <li className="flex justify-between items-center h-[auto] py-5 border-b md:border md:px-4 w-full lg:max-w-[600px]  md:border-[#2021251f] rounded md:hover:shadow transition-[shadow] cursor-pointer">
                <div className="flex items-center gap-3">
                  <DirectionsBikeIcon fontSize="large" />
                  <p className="text-sm md:text-base font-normal">
                    Schedule for later
                  </p>
                </div>
                <ArrowForwardIosOutlinedIcon
                  fontSize="medium"
                  sx={{ fontWeight: "200", color: "rgba(32, 33, 37, 0.64)" }}
                />
              </li>
              <li className="flex justify-between items-center h-[auto] py-4 border-b md:border md:px-4 w-full lg:max-w-[600px]  md:border-[#2021251f] rounded md:hover:shadow transition-[shadow] cursor-pointer gap-3">
                <div className="flex flex-col ">
                  <p className="text-sm md:text-base font-normal">
                    No-contact delivery
                  </p>
                  <span className="text-xs md:text-sm font-normal text-[#202125a3nb]">
                    Please leave the order in front of my door
                  </span>
                </div>
                <FormControlLabel
                  control={<DeliverySwitch sx={{ m: 1 }} defaultChecked />}
                  label=""
                />
              </li>
            </ul>
          </div>

          {/* Selected items */}

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg md:text-2xl lg:text-3xl">
              Selected items
            </h4>
            <div className="flex justify-between  h-[auto] py-4 w-full lg:max-w-[600px]  ">
              <div className="flex flex-col ">
                <p className="text-sm md:text-base font-medium">Capricciosa</p>
                <span className="text-sm md:text-base font-normal text-primary">
                  €10.50
                </span>
              </div>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  border: "3px solid #EEEEEE!important",
                  padding: "0.5rem 0.875rem!important",
                  minWidth: "max-content!important",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                1
              </Button>
            </div>
            <div>
              <Button
                startIcon={<AddIcon fontSize="small" />}
                variant="text"
                size="medium"
                sx={{
                  padding: "0!important",
                  color: "#202125",
                  minWidth: "max-content",
                  textTransform: "none",
                  fontWeight: "600",
                }}
                onClick={() => router.back()}
              >
                Add more items
              </Button>
            </div>
          </div>

          {/* Payment details */}

          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg md:text-2xl lg:text-3xl">
              Payment details
            </h4>

            <div className="flex justify-between items-center h-[auto] py-5 border-b md:border md:px-4 w-full lg:max-w-[600px]  md:border-[#2021251f] rounded md:hover:shadow transition-[shadow] cursor-pointer">
              <div className="flex items-center gap-3">
                <CreditCardOutlinedIcon
                  sx={{ color: "#F6B01E" }}
                  fontSize="large"
                />
                <div className="flex flex-col ">
                  <p className="text-base md:text-lg font-medium text-primary">
                    Choose a payment method
                  </p>
                  <span className="text-sm md:text-base font-normal ">
                    Please add a payment method to continue with your oder
                  </span>
                </div>
              </div>
              <ArrowForwardIosOutlinedIcon
                fontSize="medium"
                sx={{ fontWeight: "200", color: "rgba(32, 33, 37, 0.64)" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-lg md:text-2xl lg:text-3xl">
              Tip courier
            </h4>

            <div className="flex flex-col h-[auto] gap-4 py-5 px-3 md:border md:px-4 w-full lg:max-w-[600px] border  border-[#2021251f] rounded md:hover:shadow transition-[shadow] cursor-pointer">
              <div className="flex justify-between items-center text-[#202125a3] gap-4">
                <p className="text-sm md:text-base">
                  They'll get 100% of your tip after the delivery. If you want
                  to change or cancel the tip, please contact support for help.
                </p>
                <span className="text-sm">$4.00</span>
              </div>
              <div className="flex gap-4 justify-between items-center border-[3px] border-[#2021251f] p-3 rounded-lg w-full">
                <CalcButton variant="contained" disabled>
                  <RemoveIcon />
                </CalcButton>
                <p className="text-base font-normal text-primary">$4.00</p>
                <CalcButton variant="contained">
                  <AddIcon />
                </CalcButton>
              </div>
            </div>
          </div>
        </div>
        {/* Order summary */}

        <div className="relative w-full lg:max-w-[400px] lg:mt-[-7.5rem] z-100">
          <div className="flex flex-col lg:sticky top-[6rem] left-0 w-full">
            <div className="bg-white flex flex-col gap-4 p-3 lg:p-[1.5rem] border border-[#2021251f] rounded-2xl lg:shadow-2xl">
              <div className="flex justify-between items-center">
                <p className="text-lg lg:text-2xl font-semibold">
                  Prices in EUR, incl. taxes
                </p>
                <IconButton aria-label="info" color="primary">
                  <ErrorOutlineRoundedIcon />
                </IconButton>
              </div>
              <ul className="flex flex-col gap-3 pb-5 pt-2 border-b ">
                <li className="flex justify-between items-center ">
                  <p className="text-sm font-semibold lg:text-base">
                    Item subtotal (1 item)
                  </p>
                  <span className="text-sm font-semibold lg:text-base">
                    $10.50
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <p className="text-sm font-semibold lg:text-base">Delivery</p>
                  <span className="text-sm font-semibold lg:text-base">
                    $10.50
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <p className="text-sm font-semibold lg:text-base">
                    Service fee
                  </p>
                  <span className="text-sm font-semibold lg:text-base">
                    $10.50
                  </span>
                </li>
              </ul>
              <div className="flex justify-between items-center">
                <p className="text-sm font-semibold lg:text-base">
                  Tip the courier
                </p>
                <span className="text-sm font-semibold lg:text-base">
                  $10.50
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RestaurantCheckout;

RestaurantCheckout.getLayout = function getLayout(page: ReactNode) {
  return <RootLayout>{page}</RootLayout>;
};
