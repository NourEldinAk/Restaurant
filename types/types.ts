type Category = {
    id:number,
    title:string,
    img?:string,
    color:string,
    slug:string,
}
type Categories = Category[];

type Product = {
    id:string;
    title: string;
    desc?:string;
    img?:string;
    price:number;
    options?: {title: string; additionalPrice:number}[];
}
type Products = Product[]

type OrderType = {
    id: string,
    userEmail: string,
    status: string,
    products : CartItemType[],
    createdAt : Date,
    price: number,
    intent_id?: string

}

type CartItemType = {
    id: string,
    title: string,
    price: number,
    img?: string,
    optionTitle?: string,
    quantity: number
}