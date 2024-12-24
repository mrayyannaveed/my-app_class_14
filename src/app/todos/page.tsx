import Link from 'next/link';
import React from 'react'

const Todos = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const res = await url.json();
    // console.log(res)
  
    return (
      <div className='flex justify-center mt-10 '>
      <div className='rounded-2xl text-white px-20 bg-gradient-to-br from-red-500 to-purple-400'>
        <h1 className="text-2xl my-2">Todos</h1>
        {res.map((todo : any, i : number) => {
          return (
            <div className='mb-1'>
              <Link href={`${todo.id}`}>
              <h1 className='hover:bg-green-300 text-lg'><b>{i + 1}</b>- {todo.title}</h1>
              </Link>
            </div>
          )
        })}
      </div>

      </div>
    )
}

export default Todos
