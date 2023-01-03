import {ReactNode, createContext, useReducer } from "react";
import { ProductProps } from "../types";


interface InitialStateProps {
    cart: ProductProps[];
    
}

interface ActionProps  {

     type: string;
    payload?: any;
}

const initialState: InitialStateProps = {
  cart: [],
};

export const Store = createContext(initialState)


const reducer =(state: InitialStateProps, {type, payload}: ActionProps): InitialStateProps =>{
    switch (type) {
        case "ADD_TO_CART":
            const newItem = payload;
            const existItem = state.cart.find(
                (item) => item.name === newItem.name
            );
            // const quantity:number = existItem ? existItem.
            return {
              ...state,
                cart: [ payload],
            };
        //    return [...state.cart, payload]
            
        default: 
            return state
       
    }

    
}



export function StoreProvider(children: ReactNode) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}

    return <Store.Provider value={value}>{ children}</Store.Provider>
}