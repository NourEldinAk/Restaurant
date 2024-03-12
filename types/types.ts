export type Category = {
    id:number,
    title:string,
    img?:string,
    color:string,
    slug:string,
}
type Categories = Category[];

export type Product = {
    id:string;
    title: string;
    desc?:string;
    img?:string;
    price:number;
    options?: {title: string; additionalPrice:number}[];
}
export type Products = Product[]

export type OrderType = {
    id: string,
    userEmail: string,
    status: string,
    products : CartItemType[],
    createdAt : Date,
    price: number,
    intent_id?: string

}

export type CartItemType = {
    id: string,
    title: string,
    price: number,
    img?: string,
    optionTitle?: string,
    quantity: number
}

export type CartType = {
    products : CartItemType[],
    totalItems : number,
    totalPrice : number,
}

export type ActionTypes = {
    addToCart : (item:CartItemType) => void;
    removeFromCart : (item:CartItemType) => void;
}
