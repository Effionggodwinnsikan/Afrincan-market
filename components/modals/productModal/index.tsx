import React, {useState} from "react";
import { Button, Fade, Modal, ButtonProps } from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from '@mui/icons-material/Add';
import { ProductProps } from "../../../types";
import { styled } from "@mui/material/styles";

const CalcButton = styled(Button)({
  backgroundColor: "#fff !important",
  padding: "0",
  color: "#F6B01E !important",
  borderRadius: "999px",
  width: "1.5rem!important",
  minWidth: "1.5rem!important",
  height: "1.5rem",
  cursor: "pointer",

  "&:disabled":{
    backgroundColor: "transparent!important"
  }


  // "&.disabled": {
  //  backgroundColor: "transaprent",
  // }
});



interface ProductDetailProps {
  open: boolean;
  onClose?: () => void;
  // onClick?: () => void;
  product:ProductProps
}


export const ProductDetail: React.FC<ProductDetailProps> = ({
  open,
  onClose,
  // onClick,
  product
}) => {
 



  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
      >
        <Fade in={open}>
          <div className=" flex flex-col border-0 overflow-hidden rounded-xl absolute gap-6 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]  w-full  z-10  bg-white  modalContent modal__content  md:rounded-2xl shadow-md product-modal">
            <div className="relative pt-[60%]  h-full flex flex-col gap-8">
              <div className="absolute  right-4 top-2 z-10">
                {/* <div className="flex justify-end items-center w-full z-10 bg-white "> */}
                <button
                  className="flex items-center justify-center bg-[#20212514] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                  onClick={onClose}
                >
                  <ClearIcon fontSize="inherit" />
                </button>

                {/* </div> */}
              </div>
              <div className="h-[213.33px] md:h-[303px] lg:h-[346p.667px] absolute top-0 left-0">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-full w-full object-cover object-position-[50%, 50%]"
                />
              </div>
              <div className="flex flex-col  p-3 gap-4 justify-between ">
                <h4 className="text-2xl md:text-3xl font-semibold">
                  {product.name}
                </h4>
                <p className="text-sm text-[#f93a25] md:text-base">
                  {product.price}
                  <span className=" text-[#202125a3] line-through pl-3">
                    2.5
                  </span>
                </p>
                <p className="text-sm">{product.desc}</p>
              </div>
              <div className=" sticky bottom-4 left-0 flex gap-3 items-center px-3 w-full z-100">
                <div className="flex gap-4 items-center bg-[#FDEFD2] p-3 rounded-lg">
                  <CalcButton variant="contained" disabled>
                    <RemoveIcon />
                  </CalcButton>
                  <p className="text-xl font-normal text-primary">4</p>
                  <CalcButton variant="contained">
                    <AddIcon />
                  </CalcButton>

                  {/* <button className="bg-white rounded-bl-full"></button> */}
                </div>
                <Button variant="contained" size="large" sx={{width:"100%!important", height:"3.2rem"}}>
                  <div className="flex justify-between items-center w-full">
                    <p>Add to order</p>{" "}
                    <span className="font-normal">$2.5</span>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
};


