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
    closed?: boolean
}