import React, { useContext, useState } from 'react'
import { CartItemProps } from '../../types'
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import { Store } from '../../context/store';

const CalcButton = styled(Button)({
  backgroundColor: "#fff !important",
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


export const CartItem = (item: CartItemProps) => {
  const {state, dispatch} = useContext(Store)
    const [openAddQty, setOpenAddQty] = useState(false)
  const [quantity, setQuantity] = useState<number>(item.quantity)


     function increaseQty() {
       setQuantity(quantity + 1)
        //  const existItem = state.cart.find((x) => x.name === item.name);
        //  const newQuantity = existItem
        //    ? (existItem.quantity = quantity)
        //    : quantity;
        //  const newProduct = {
        //    // id: product.id,
        //    name: item.name,
        //    img: item.img,
        //    price: item.price,
        //    quantity: newQuantity,
        //  };
       
        //  dispatch({
        //    type: "ADD_TO_CART",
        //    payload: {
        //      ...newProduct,
        //    },
        //  });
     }

     // reduce quantity
     function reduceQty() {
       if (item.quantity === 1) return;
       
       setQuantity(quantity - 1);
        
       
     }
  return (
    <div className="flex justify-between">
      <div className="flex gap-3" onClick={() => setOpenAddQty(true)}>
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
        )}
        <div
          className="flex flex-col"
          //   onClick={() => setOpenAddQty(!openAddQty)}
        >
          <p className="font-semibold text-base">{item.name}</p>
          <span className="font-normal text-base text-primary">
            {item.price * item.quantity}
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
