import React from 'react'
import ModalContainer from "../../ModalContainer";

interface CardModalProps {
  open: boolean;
  onClose?: () => void;
  // onCli ck?: () => v;oid;
  // product:ProductProps
}
const CartModal = ({ open, onClose }: CardModalProps) => {
  return  <ModalContainer
        open={open}
        onClose={onClose}
      >
        <div></div>
      </ModalContainer>;
};

export default CartModal