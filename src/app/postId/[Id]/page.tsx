import React from 'react'

const Post = async (props:any) => {
    
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.Id}`);
    const res = await url.json();
    // console.log(res)
  return (
    <div>
        <div className=' my-2 mx-2'>
            <h1 className='text-2xl my-2'>Post Details</h1>
            <p>{res.id}</p>
            <p>{res.title}</p>
            <p>{res.body}</p>
        </div>
    </div>
  )
}

export default Post