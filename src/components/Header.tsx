    'use client'
import  Image  from 'next/image';

export const Header = () => {


return (
    <div className="text-white  w-screen  h-[14vh]  flex justify-center items-center ">
        <Image 
        className='w-10 h-10'
        src="/images/logo.svg"
        alt='logo ignite'
        />
        <h1>Ignite Feed</h1>
    </div>

)
}
