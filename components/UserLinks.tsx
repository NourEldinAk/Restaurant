import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

const UserLinks = () => {
    const {status} = useSession();
  return (
    <>
        {status === "authenticated" ? (
            < >
            <Link href="/orders" className='hover:text-primary hover:rotate-6 transition-all duration-300 hover:scale-110'>Orders</Link>
            <span className='hover:text-primary cursor-pointer hover:rotate-6 transition-all duration-300 hover:scale-110' onClick={()=>signOut()}>LogOut</span>
            </>
        ):(
            <Link href="/login" className='hover:text-primary hover:rotate-6 transition-all duration-300 hover:scale-110'> Login</Link>
        )}
      </>
  )
}

export default UserLinks
