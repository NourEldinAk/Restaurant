import { title } from "process";

export const NavLinks = [
    {href:'/', key:'home', text:'Home'},
    {href:'/menu', key:'menu', text:'Menu'},
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


export const  traditionals: Products=[
    {
        id:1,
        title:"Mabtn",
        desc:"very delicous libyan food",
        img:"/imgs/Mabtn.jpg",
        price:40,
        options:[
            {
                title:"Small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:4
            },
            {
                title:"Large",
                additionalPrice:6
            }
        ]
    },
    {
        id:2,
        title:"Mabtn",
        desc:"very delicous libyan food",
        img:"/imgs/Mabtn.jpg",
        price:40,
        options:[
            {
                title:"Small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:4
            },
            {
                title:"Large",
                additionalPrice:6
            }
        ]
    },
    {
        id:3,
        title:"Mabtn",
        desc:"very delicous libyan food",
        img:"/imgs/Mabtn.jpg",
        price:40,
        options:[
            {
                title:"Small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:4
            },
            {
                title:"Large",
                additionalPrice:6
            }
        ]
    },
    {
        id:4,
        title:"Mabtn",
        desc:"very delicous libyan food",
        img:"/imgs/Mabtn.jpg",
        price:40,
        options:[
            {
                title:"Small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:4
            },
            {
                title:"Large",
                additionalPrice:6
            }
        ]
    },
    {
        id:5,
        title:"Mabtn",
        desc:"very delicous libyan food",
        img:"/imgs/Mabtn.jpg",
        price:40,
        options:[
            {
                title:"Small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:4
            },
            {
                title:"Large",
                additionalPrice:6
            }
        ]
    },
    {
        id:6,
        title:"Mabtn",
        desc:"very delicous libyan food",
        img:"/imgs/Mabtn.jpg",
        price:40,
        options:[
            {
                title:"Small",
                additionalPrice:0
            },
            {
                title:"Medium",
                additionalPrice:4
            },
            {
                title:"Large",
                additionalPrice:6
            }
        ]
    }
   
]
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

type Category = {
    id:number,
    title:string,
    img?:string,
    bgColor:string,
    textColor:string,
    slug:string,
}
type Categories = Category[];

export const categories:Categories = [
    {
        id:1,
        title:"Fast Food",
        slug:"fast-food",
        img:"/fast-food.jpg",
        bgColor: "bg-primary",
        textColor:"text-secondary",
    },
    {   id:2,
        title:"Fresh Juices",
        slug:'fresh-juices',
        img:"/juices.jpg",
        bgColor: "bg-secondary",
        textColor:"text-[#f3cc80]",
    },
    { 
        id:3,
        title:"Traditional",
        slug:"traditional",
        img:"/imgs/Pasta.jpg",
        bgColor: "bg-zinc-300",
        textColor:"text-black-75",
    }
]
