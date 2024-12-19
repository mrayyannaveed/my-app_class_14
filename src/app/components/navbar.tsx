import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <nav className='bg-black text-white flex justify-around py-2'>
            <Link href={"/"}>Home</Link>
            <Link href={"/todos"}>Todos</Link>
            <Link href={"/photo"}>Photos</Link>
            <Link href={"/posts"}>Posts</Link>
        </nav>
    </div>
  )
}
