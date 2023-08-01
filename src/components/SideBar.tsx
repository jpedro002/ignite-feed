import React from 'react'
import {PiNotePencilLight} from 'react-icons/pi'
import { Avatar } from './Avatar'

export const SideBar = () => {
  return (
    <aside className='bg-gray-800  overflow-hidden rounded-lg flex flex-col items-center ' >

        <img
        className='w-full h-[72px] object-cover flex flex-col items-center '
        src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=50"  />
        <div className='flex flex-col items-center mt-4 border-b-2 border-b-gray-600 w-4/5 pb-4' >
            
            <Avatar className='w-[calc(3rem+12px)] h-[calc(3rem+12px)] 
            rounded-md mt-[-3rem] border-4 border-gray-800 
            outline outline-2 outline-green-400' 
            src="https://avatars.githubusercontent.com/u/122836400?v=4" />
            <strong className='text-gray-100 mt-4'>João Pedro</strong>
            <span>Web Developer</span>
        </div>

        <button className='flex items-center justify-center gap-2 text-green-500  
        font-bold border-green-500
         border-[1.5px] my-6 p-[1rem_2rem]  rounded-xl hover:bg-green-500 hover:text-white ease-in duration-300 active:bg-green-800  '>
            <PiNotePencilLight className='w-5 h-auto' />
            Editar seu perfil
        </button>
        
    </aside>
  )
}
