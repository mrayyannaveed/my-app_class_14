import React from 'react'

const Photo = async (props:any) => {
    const url = await 
    fetch(`https://jsonplaceholder.typicode.com/photos/${props.params.Id}`,
        {cache: "no-store"}
    );
    const res = await url.json();
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
            <img src={res.url} alt={res.title} className='rounded-2xl mb-2' />
            <h1>{res.title}</h1>
            <p>{res.id}</p>
        </div>
    </div>
  )
}

export default Photo