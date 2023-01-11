export interface OptionsProps {
  abr?: string;
  name?: string;
  title?: string;
}

export interface Categoryprops {
  name: string;
  img: string;
  numPlaces: string;
}

export interface StoreProps {
  name: string;
  img: string;
  min: string;
  desc: string;
  price: string;
  rating?: string;
  category: string[];
  open: boolean;

}
export interface RestaurantsProps {
  name: string;
  img: string;
  min: string;
  desc: string;
  price: string;
  rating?: string;
  open?: boolean;
  category: string[]
}

export interface ProductProps {
  name: string;
  desc?: string;
  img?: string;
  price: string;
  menu?: string;
}


export interface SignupProps {
  email: string;
  username: string;
  password: string;
}

export interface LoginProps {
  email: string;
  password: string;
}


export interface AllPlaceProps {
  name: string;
  img: string;
  min: string;
  desc: string;
  price: string;
  rating?: string;
  open: boolean;
  category: string[];
  type: string
}

export interface CartItemProps {
  id?: string;
  name: string;
  img: string;
  price: number;
  quantity: number;
}