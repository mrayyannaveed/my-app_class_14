import Link from 'next/link';
import React from 'react'

const Posts = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await url.json();
  return (
    <div>
        <div className='flex justify-center mt-10 items-center'>
        <div className='rounded-2xl text-white px-5 sm:px-20 bg-gradient-to-br from-green-500 to-purple-400'>
        <h1 className='text-2xl my-2'>Posts</h1>
        {res.map((post: any, i:number) => {
            return (
                <div className='mb-1'>
                    <Link href={`/postId/${post.id}`}>
                    <h1 className='hover:bg-green-300'><b>{i + 1}</b>- {post.title}</h1>
                    </Link>
                </div>
            )
        })}
        </div>
        </div>
    </div>
  )
}

export default Posts