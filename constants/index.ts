export const NavLinks = [
    {href:'/', key:'home', text:'Home'},
    {href:'/menu/category', key:'menu', text:'Menu'},
    {href:'/reserve', key:'reserve', text:'Reserve'},
    // {href:'/cart', key:'cart', text:'Cart'},
    {href:'/contact', key:'contact', text:'Contact'},
]

type Product = {
    id:number;
    title: string;
    desc?:string;
    img?:string;
    price:number;
    options?: {title: string; additionalPrice:number}[];
}

type Products = Product[];
export const featuredProducts: Products=[
    {
        id:1,
        title:"Pizza",
        desc:"combining premium ingredients for a taste sensation that's simply irresistible.",
        img:"/imgs/pizza.jpg",
        price:59,
    },
    {
        id:2,
        title:"Mabtn",
        desc:"combining premium ingredients for a taste sensation that's simply irresistible.",
        img:"/imgs/mabtn.jpg",
        price:59,
    },
    {
        id:3,
        title:"Cheese Fries",
        desc:"combining premium ingredients for a taste sensation that's simply irresistible.",
        img:"/imgs/Cheese Fries.jpg",
        price:59,
    },
    {
        id:5,
        title:"Salsa",
        desc:"combining premium ingredients for a taste sensation that's simply irresistible.",
        img:"/imgs/Salsa.jpg",
        price:59,
    },
    {
        id:6,
        title:"Fried Chicken",
        desc:"combining premium ingredients for a taste sensation that's simply irresistible.",
        img:"/imgs/Fried-chicken.jpg",
        price:59,
    },

]
