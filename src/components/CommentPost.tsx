import React, { useState } from 'react'
import {BsTrash3} from 'react-icons/bs'
import {AiOutlineLike} from 'react-icons/ai'
import { Avatar } from './Avatar'


export interface commentContent {
    content: string;
  }
  

export const CommentPost = ({content}:commentContent) => {


    const [like,setLike] = useState(0)


  return (
    <div className='w-full p-4 flex items-start'>
        

        <Avatar className='w-12 h-12 rounded-md  mr-4 '  src='https://avatars.githubusercontent.com/u/122836400?v=4'/>

        <div className='w-full '>
            <div className='bg-gray-900 px-4 pt-4 pb-6 rounded-lg space-y-4 mb-4  '>
                <header className='flex justify-between '>
                    <div>
                        <strong>João Pedro</strong>
                    </div>
                    <button title='Botão de deletar' ><BsTrash3/></button>
                </header>
                <p className='text-gray-300   '>{content}</p>
            </div>
            <footer className='flex space-x-4 items-center       '>
                <AiOutlineLike className='h-5 w-5 text-slate-500    '  onClick={() => setLike(like => like + 1 ) }  />
                <span className='select-none text-slate-500 '>Aplaudir • {like}</span>
            </footer>
        </div>
        
    </div>
  )
}
