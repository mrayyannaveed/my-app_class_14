import Link from 'next/link';
import React from 'react'

const Todos = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const res = await url.json();
    // console.log(res)
  
    return (
      <div>
        <h1 className="text-2xl my-2">Todos</h1>
        {res.map((todo : any, i : number) => {
          return (
            <div className='mb-1'>
              <Link href={`${todo.id}`}>
              <h1 className='hover:bg-green-300'><b>{i + 1}</b>- {todo.title}</h1>
              </Link>
            </div>
          )
        })}
      </div>
    )
}

export default Todos
