import React from 'react'

const User = async (props:any) => {
    const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.Id}`);
    const res = await url.json();
    // console.log(res)
  return (
    <div className='flex justify-center items-center h-full mt-10 '>
        <div className=' my-2 rounded-2xl text-xl text-white mx-2 bg-gradient-to-br from-pink-600 to-yellow-500 sm:p-20'>
            <h1 className='text-3xl my-3'>Post Details</h1>
            <p><span className='font-semibold text-black'>Id:</span> {res.id}</p>
            <p><span className='font-semibold text-black'>Name:</span> {res.name}</p>
            <p><span className='font-semibold text-black'>Username:</span> {res.username}</p>
            <p><span className='font-semibold text-black'>Email:</span> {res.email}</p>
            <h1 className='text-3xl my-3'>Address</h1>
            <p><span className='font-semibold text-black'>Street:</span> {res.address.street}</p>
            <p><span className='font-semibold text-black'>Suite:</span> {res.address.suite}</p>
            <p><span className='font-semibold text-black'>City:</span> {res.address.city}</p>
            <p><span className='font-semibold text-black'>Zipcode:</span> {res.address.zipcode}</p>
            <p><span className='font-semibold text-black'>Lat:</span> {res.address.geo.lat}</p>
            <p><span className='font-semibold text-black'>Lng:</span> {res.address.geo.lng}</p>
            <p><span className='font-semibold text-black'>Phone:</span> {res.phone}</p>
            <p><span className='font-semibold text-black'>Website:</span> {res.website}</p>
            <h1 className='text-3xl my-3'>Company Details</h1>
            <p><span className='font-semibold text-black'>Company Name:</span> {res.company.name}</p>
            <p><span className='font-semibold text-black'>Catch Phrase:</span> {res.company.catchPhrase}</p>
            <p><span className='font-semibold text-black'>BS:</span> {res.company.bs}</p>
        </div>
    </div>
  )
}

export default User