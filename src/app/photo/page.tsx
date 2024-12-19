import Link from 'next/link';
import React from 'react'

const Photos = async () => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/photos`,
        {cache: "no-store"}
    );
    const res = await url.json();
    // console.log(res)
  return (
    <div>
        <div className='text-center'>
        <h1 className='text-3xl my-4 font-bold'>Photos</h1>
        </div>
        <section className='grid xl:grid-cols-3 grid-cols-1 gap-10 lg:grid-cols-2'>

        {res.map((photo: any) => {
            return(
                <div>
                    <div className='px-2 text-center'>
                    <Link href={`/photoId/${photo.id}`}>
                    <img src={photo.url} alt={photo.title} className='rounded-2xl mb-2'/>
                    <h1 className='hover:bg-green-300'>{photo.title}</h1>
                    </Link>
                    </div>
                </div>
            )
        })}
        </section>
    </div>
  )
}

export default Photos