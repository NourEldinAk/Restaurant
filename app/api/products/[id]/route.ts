import { getAuthSession } from "@/utils/AuthOptions";
import { prisma } from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req:NextRequest , {params}: {params : {id : string}})=>{

    const {id} = params;
    try{
        const product = await prisma.product.findUnique({
            where:{
                id: id
            }
        })
    return new NextResponse(JSON.stringify(product), {status:200})

    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message : "Something Went Wrong ..."}), {status:500})
    }
}

export const DELETE = async (req:NextRequest,  {params}: {params: {id:string}})=>{
    const {id} = params;
    const session = await getAuthSession();

    if(session?.user.isAdmin){

        try{
            const product = await prisma.product.delete({
                where:{
                    id:id
                }
            })
            return new NextResponse(JSON.stringify("Product Has Been Deleted!"),{status:200})
        }catch(err){
            console.log(err)
            return new NextResponse(JSON.stringify({message : "Something Went Wrong ..."}), {status:500})
        }
    }
    return new NextResponse(JSON.stringify({message: "You Are not Authorized"}), {status:403})
}