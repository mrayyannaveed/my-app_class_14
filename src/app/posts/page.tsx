import Link from 'next/link';
import React from 'react'

const Posts = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await url.json();
  return (
    <div>
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
  )
}

export default Posts