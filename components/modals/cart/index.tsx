import React, { useContext } from "react";
import ModalContainer from "../../ModalContainer";
import ClearIcon from "@mui/icons-material/Clear";
import { Store } from "../../../context/store";
import { CartItem } from "../../cards/CartItem";
import { Button } from "@mui/material";
import { FormatCur } from "../../../hooks/formatCurrency";

interface CardModalProps {
  open: boolean;
  onClose?: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
 
}
const CartModal = ({ open, onClose, setOpen }: CardModalProps) => {
  const { state, totalItems, totalPrice } = useContext(Store);
  const { cart } = state;

  if (cart.length < 1) setOpen(false)

    return (
      <ModalContainer open={open} onClose={onClose}>
        <div className=" border-0 rounded-xl p-4 max-w-[31.25rem] z-10 w-full bg-white   modal__content  md:rounded-2xl  overflow-y-auto relative ">
          <div className="flex flex-col gap-6 relative">
            <div className="relative h-full">
              <div className="flex justify-end items-center w-full z-10 bg-white sticky top-0 right-0 ">
                <button
                  className="flex items-center justify-center bg-[#E4E4E4] p-1 rounded-[50%] font-bold text-[32px] border-none outline-none cursor-pointer"
                  onClick={onClose}
                >
                  <ClearIcon fontSize="inherit" />
                </button>
              </div>
            </div>
            <h2 className="text-2xl text-maintxt font-semibold">Your order</h2>
            <div className="flex flex-col gap-4 border-b-2 pb-5">
              {cart.map((item, idx) => {
                return <CartItem {...item} key={idx} />;
              })}
            </div>

            <div className="w-full sticky left-0 bottom-0 bg-white  ">
              <Button
                sx={{
                  justifyContent: "space-between",
                  width: "100%",
                }}
                size="large"
              >
                <div className="flex gap-3">
                  <div className="w-[1.5rem] h-[1.5rem] rounded-[1.75rem] flex items-center justify-center  bg-white ">
                    <span className="text-sm font-bold  text-primary ">
                      {totalItems}
                    </span>
                  </div>
                  <p>Go to check out</p>
                </div>
                <span>{FormatCur(totalPrice)}</span>
              </Button>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
};

export default CartModal;
