import React from 'react'

const Post = async (props:any) => {
    
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.Id}`);
    const res = await url.json();
    // console.log(res)
  return (
    <div className='flex justify-center items-center h-full mt-10 '>
        <div className=' my-2 rounded-2xl text-xl text-white mx-2 bg-gradient-to-br from-pink-600 to-yellow-500 sm:p-20'>
            <h1 className='text-2xl my-2'>Post Details</h1>
            <p><span className='font-semibold text-black'>Id:</span> {res.id}</p>
            <p><span className='font-semibold text-black'>Title:</span> {res.title}</p>
            <p><span className='font-semibold text-black'>Body:</span> {res.body}</p>
        </div>
    </div>
  )
}

export default Post