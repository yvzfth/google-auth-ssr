import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import Image from 'next/image';
const login = () => {
  const logIn = () => {};
  return (
    <div className='flex h-screen w-screen relative items-center justify-center'>
      <Image src={'/aurora.jpg'} layout='fill' objectFit='cover' />
      <div
        className='flex items-center justify-center rounded-lg bg-opacity-80
        border border-gray-600 bg-white transition ease-out hover:bg-opacity-100
        hover:shadow-md space-x-4 z-10 p-2 absolute cursor-pointer'
        onClick={logIn}
      >
        <FcGoogle fontSize={30} />
        <p className='font-semibold text-lg'>Sign In with Google</p>
      </div>
    </div>
  );
};

export default login;
