"use client";
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

const DeleteButton = ( {id}: {id:string} ) => {
    const {data:session , status } = useSession();
    const router = useRouter();

    if(status === "loading"){
        return <div className='text-white'>Loading...</div>
    }
    if(status === "unauthenticated" || !session?.user.isAdmin){
        return;
    }
    const handleDelete = async ()=>{
        const res = await fetch(`http://localhost:3000/api/products/${id}`,{
            method: "DELETE"
        })
        if(res.status ===200){
            router.push('/menu');
            toast("The Product Has Been Deleted!");
        }else{
            const data = await res.json()
            toast.error(data.message)
        }
    }
  return (
    <button className='px-2 py-2 bg-red-400 text-white absolute top-4 right-20 rounded-full' onClick={handleDelete}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>

    </button>
  )
}

export default DeleteButton
