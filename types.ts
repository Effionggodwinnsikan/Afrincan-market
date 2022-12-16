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
