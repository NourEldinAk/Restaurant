"use client";

import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const OrdersPage = () => {

  const {data:session,status} = useSession();
  const router = useRouter();
  if(status === "unauthenticated"){
      router.push('/')
    }
  const { isPending, error, data } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      fetch('http://localhost:3000/api/orders').then((res) =>
        res.json(),
      ),
  })

  const queryClient = useQueryClient();
 
   const mutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) => {
      return fetch(`http://localhost:3000/api/orders/${id}`, {
        method:"PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(status),
      });
    },
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>,id:string)=>{
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements[0] as HTMLInputElement
    const status = input.value;
    mutation.mutate({id,status})
    toast.success("Order Status Has Been Updated...")
    input.value = ""
  }
  
  if (isPending || status ==="loading") return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message


  return (
    <div className="p-4 lg:px-20 xl:px-40 text-secondary  h-[calc(100vh-14.2rem)]">
      <table className="w-full border-separate border-spacing-3 text-center">
        <thead>
          <tr className="text-primary">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item:OrderType)=>(
            <tr key={item.id} className={`${item.status === "delivered"?  "bg-green-100": "bg-red-100"} text-sm md:text-base `}>
            <td className="hidden md:block py-6 px-1">{item.id}</td>
            <td className="py-6 px-1">{item.createdAt.toString().slice(0,10)}</td>
            <td className="py-6 px-1">${item.price}</td>
            <td className="hidden md:block py-6 px-1">{item.products[0].title}</td>
            {session?.user.isAdmin ? (
              <td className="py-6 px-1 ">
              <form action="" className="flex items-center justify-center gap-4" onSubmit={(e)=>handleSubmit(e,item.id)}>
                <input type="text" className="p-2 ring-1 ring-zinc-100 rounded-lg border-2 border-zinc-300 focus:outline-zinc-400 " placeholder={item.status} />
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 text-zinc-200 bg-red-400 p-1 rounded-full">
                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
              </button>
              </form>
              </td>
            ):(
              <td className="py-6 px-1">{item.status}</td>
            )}
          </tr>
          ))}

          {/* <tr className="text-sm md:text-base odd:bg-black-75 text-white ">
            <td className="hidden md:block py-6 px-1 border-2 border-white">1237861238721</td>
            <td className="py-6 px-1 border-2 border-white">19.07.2023</td>
            <td className="py-6 px-1 border-2 border-white">89.90</td>
            <td className="hidden md:block py-6 px-1 border-2 border-white">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1 border-2 border-white">On the way (approx. 10min)...</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">89.90</td>
            <td className="hidden md:block py-6 px-1">Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)</td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;