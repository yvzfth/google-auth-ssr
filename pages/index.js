import Head from 'next/head';
import React from 'react';
import { IoExit } from 'react-icons/io5';

function Home() {
  const logOut = () => {};
  return (
    <div className='flex justify-center items-center h-screen w-screen bg-green-300'>
      <Head>
        <title>Google Authentication SSR</title>
        <meta name='description' content='Google Authentication SSR' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex items-center relative bg-white p-2 rounded-lg space-x-4 min-w-[250px]'>
        <IoExit
          fontSize={30}
          className='absolute top-1 right-1'
          onClick={logOut}
        />
        <img src='' alt='image' />
        <div className='flex flex-col justify-center'>
          <h3 className='font-semibold text-lg'>Name</h3>
          <p className='text-gray-800'>Email</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
