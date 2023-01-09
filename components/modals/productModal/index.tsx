import React, { useContext, useState } from "react";
import { Button } from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from '@mui/icons-material/Add';
import { ProductProps } from "../../../types";
import { styled } from "@mui/material/styles";
import ModalContainer from "../../ModalContainer";
import { Store } from "../../../utils/store";




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

  const [quantity, setQuantity] = useState<number>(1)
  const { state, dispatch } = useContext(Store)
  const {cart} = state

  //increase qunatity
  function increaseQty() {
    setQuantity((qty)=> qty + 1 )
  }

  // reduce quantity
  function reduceQty() {
    if (quantity === 1) return
    setQuantity((qty) => qty - 1)
  }

  function addToCart() {
    const existItem = cart.find((x) => x.name === product.name);
    const newQuantity = existItem
      ? (existItem.quantity = quantity)
      : quantity;
    const newProduct = {
      // id: product.id,
      name: product.name,
      img: product.img,
      price: product.price,
      quantity: newQuantity,
    };
       dispatch({
         type: "ADD_TO_CART",
         payload: {
           ...newProduct,
         },
       });
    
    
    console.log(cart)
    // const product = 
    
  }
 



  return (
    <>
      <ModalContainer open={open} onClose={onClose}>
        <div className=" flex flex-col border-0 overflow-auto rounded-xl  gap-6 w-full  z-10  bg-white  modalContent modal__content  md:rounded-2xl shadow-md product-modal">
          <div className="relative pt-[65%]  h-full flex flex-col gap-8">
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
            <div className="h-[213.33px] md:h-[303px] lg:h-[346px] absolute top-0 left-0">
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
                <span className=" text-[#202125a3] line-through pl-3">2.5</span>
              </p>
              <p className="text-sm">{product.desc}</p>
            </div>
            <div className=" sticky bottom-4 left-0 flex gap-3 items-center px-3 w-full z-100">
              <div className="flex gap-4 items-center bg-[#FDEFD2] p-3 rounded-lg">
                <CalcButton
                  variant="contained"
                  disabled={quantity === 1}
                  onClick={reduceQty}
                >
                  <RemoveIcon />
                </CalcButton>
                <p className="text-xl font-normal text-primary">{quantity}</p>
                <CalcButton variant="contained" onClick={increaseQty}>
                  <AddIcon />
                </CalcButton>
              </div>
              <Button
                variant="contained"
                size="large"
                sx={{ width: "100%!important", height: "3.2rem" }}
                onClick={addToCart}
              >
                <div className="flex justify-between items-center w-full">
                  <p>Add to order</p>{" "}
                  <span className="font-normal">
                    {quantity * Number(product.price)}
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </ModalContainer>
    </>
  );
};


