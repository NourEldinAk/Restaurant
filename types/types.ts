type Category = {
    id:number,
    title:string,
    img?:string,
    color:string,
    slug:string,
}
type Categories = Category[];

type Product = {
    id:number;
    title: string;
    desc?:string;
    img?:string;
    price:number;
    options?: {title: string; additionalPrice:number}[];
}
type Products = Product[]
