    'use client'
import  Image  from 'next/image';

export const Header = () => {


return (
    <div className="text-white  w-screen  h-[24vh]  flex justify-center items-center ">
        <img 
        className='w-10 h-10'
        src="/images/logo.svg"
        alt='logo ignite'
        />
        <h1>Ignite Feed</h1>
    </div>

)
}
