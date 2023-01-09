import React, { ReactElement, createContext, useReducer} from "react";
import { CartItemProps } from "../types";



interface InitialStateProps {
    cart: CartItemProps[];
    user: any;
    
 
}

interface ActionProps  {
     type: string;
    payload?: any;
}

const initialState: InitialStateProps = {
  cart:
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? //    @ts-ignore
        JSON.parse(localStorage.getItem("cart"))
      : [],
  user:
    typeof window !== "undefined" && localStorage.getItem("userInfo")
      ? //    @ts-ignore
        JSON.parse(localStorage.getItem("userInfo")) || ""
      : "",
};

interface ContextProps {
  state: InitialStateProps;
  dispatch: React.Dispatch<any>;
  totalItems: number;
  totalPrice: number;
}

export const Store = createContext<ContextProps>({
    state: initialState,
    dispatch: () => null,
    totalItems: 0,
    totalPrice: 0,
    
})

// : InitialStateProps


const reducer =(state: InitialStateProps, {type, payload}: ActionProps) =>{
    switch (type) {
      case "ADD_TO_CART":
        const { name, img, price, quantity } = payload;

        const newItem = payload;
        const existItem = state.cart.find((item) => item.name === newItem.name);
        const cartItems = existItem
          ? state.cart.map((item) =>
              item.name === existItem.name ? newItem : item
            )
          : [...state.cart, { name, img, price, quantity }];

        // const filteredItems = state.cart.filter((item) => item.name != name);

        // const qty:number = existItem ? existItem.qty + 1 : 1
        localStorage.setItem("cart", JSON.stringify(cartItems));
        return {
          ...state,
          cart: [...cartItems],
        };

      //    return [...state.cart, payload]

      case "USER_LOGIN":
        return { ...state, user: payload };

      case "LOGOUT_USER":
        return {
          ...state,
          user: "",
         
        };

      default:
        return state;
    }

    
}

type ChildrenType = {children?: ReactElement | ReactElement[]}

export function StoreProvider({ children }: ChildrenType) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const totalItems = state.cart.reduce((prev, item) => {
        return prev + item.quantity;
    }, 0)
  const totalPrice = state.cart.reduce((prev, item) => {
    return prev + (item.price * item.quantity)
  }, 0)

  const value = { state, dispatch, totalItems, totalPrice };


  return <Store.Provider value={value}>{children}</Store.Provider>;
}
