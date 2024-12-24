import Link from 'next/link';
import React from 'react'

const Users = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const res = await url.json();
  return (
    <div>
        <div className='flex justify-center h-[100vh] sm:h-[60vh] items-center'>
        <div className='rounded-2xl text-white px-5 sm:px-20 bg-gradient-to-br from-green-500 to-purple-400'>
        <h1 className='text-3xl my-2 text-center'>Users</h1>
        {res.map((user: any, i:number) => {
            return (
                <div className='mb-1'>
                    <Link href={`/userId/${user.id}`}>
                    <h1 className='hover:bg-green-300 text-xl'><b>{i + 1}</b>- {user.name}</h1>
                    </Link>
                </div>
            )
        })} 
        </div>
        </div>
    </div>
  )
}

export default Users