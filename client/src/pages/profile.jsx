import React from 'react'
import {useSelector} from 'react-redux';

const profile = () => {
  const {currentUser}= useSelector((state)=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-center font-semibold text-3xl my-7'> Profile </h1>
    
    <form className='flex flex-col gap-4'>
    <img src={currentUser.avatar} alt='profile' className='rounded-full h-24 w-24 object-cover
    cursor-pointer self-center mt-2'/>
    <input type='text' className='rounded-full p-3 border' id='username' placeholder='Username'/>
    <input type='text' className='rounded-full p-3 border' id='email' placeholder='Email'/>
    <input type='text' className='rounded-full p-3 border' id='password' placeholder='Password'/>
    <button className='bg-slate-900  text-white p-3  rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
      Update
    </button> 
    </form>
    <div className='flex justify-between mt-5'>
      <span className='text-red-700 cursor-pointer'>Delete account</span>
      <span className='text-red-700 cursor-pointer'>Sign out</span>
    </div>
    </div>
    
  )
}

export default profile