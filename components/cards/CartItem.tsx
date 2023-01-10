import React, { useContext, useState } from 'react'
import { CartItemProps } from '../../types'
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { styled } from "@mui/material/styles";
import { Store } from '../../context/store';
import { FormatCur } from '../../hooks/formatCurrency';

const CalcButton = styled(Button)({
  backgroundColor: "#fff !important",
  padding: "0",
  color: "#F6B01E !important",
  borderRadius: "999px",
  width: "1.25rem!important",
  minWidth: "1.25rem!important",
  height: "1.25rem",
  cursor: "pointer",

  "&:disabled": {
    backgroundColor: "transparent!important",
  },

  // "&.disabled": {
  //  backgroundColor: "transaprent",
  // }
});


export const CartItem = (item: CartItemProps) => {
  const {state, dispatch} = useContext(Store)
    const [openAddQty, setOpenAddQty] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)
   const existItem = state.cart.find((x) => x.name === item.name);


     function increaseQty() {
       setQuantity(quantity + 1)
        
         const newQuantity = existItem
           ? (existItem.quantity + 1)
           : quantity;
         const newProduct = {
           // id: product.id,
           name: item.name,
           img: item.img,
           price: item.price,
           quantity: newQuantity,
         };
       
         dispatch({
           type: "ADD_TO_CART",
           payload: {
             ...newProduct,
           },
         });
     }

     // reduce quantity
     function reduceQty() {
       if (quantity === 1) {
         dispatch({
           type: "REMOVE_FROM_CART",
           payload: item,
         });
       }
       else {
         
         setQuantity(quantity - 1);
          const newQuantity = existItem ? existItem.quantity - 1 : quantity;
          const newProduct = {
            // id: product.id,
            name: item.name,
            img: item.img,
            price: item.price,
            quantity: newQuantity,
          };

          dispatch({
            type: "ADD_TO_CART",
            payload: {
              ...newProduct,
            },
          });
       }
       
         
  }
  
  function removeFromCart() {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: item ,
    });
  }
  return (
    <div className="flex gap-3 justify-between">
      <div className="flex gap-3">
        {!openAddQty && (
          <Button
            variant="outlined"
            size="small"
            onClick={() => setOpenAddQty(!openAddQty)}
            sx={{
              border: "3px solid #EEEEEE!important",
              padding: "0.5rem 0.875rem!important",
              minWidth: "max-content!important",
              fontWeight: 600,
              fontSize: "0.875rem",
            }}
          >
            {item.quantity}
          </Button>
        )}
        {openAddQty && (
          <div className="flex gap-4 items-center bg-[#FDEFD2] p-[0.5rem] rounded-lg">
            <CalcButton variant="contained" onClick={reduceQty}>
              <RemoveIcon />
            </CalcButton>
            <p className="text-base font-medium text-primary">{quantity}</p>
            <CalcButton variant="contained" onClick={increaseQty}>
              <AddIcon />
            </CalcButton>
            <IconButton
              aria-label="delete"
              sx={{
                color: "#F6B01E",
              }}
              onClick={removeFromCart}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        )}
        <div
          className="flex flex-col"
          onClick={() => setOpenAddQty(!openAddQty)}
          //   onClick={() => setOpenAddQty(!openAddQty)}
        >
          <p className="font-semibold text-base">{item.name}</p>
          <span className="font-normal text-base text-primary">
            {FormatCur(item.price * item.quantity)}
          </span>
        </div>
      </div>
      <div className="h-[2.5rem] w-[3.75rem] relative rounded">
        <img
          src={item.img}
          alt={item.name}
          className="absolute top-0 left-0 h-full -w-full object-contain rounded"
        />
      </div>
    </div>
  );
}
