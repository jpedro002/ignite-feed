import React from 'react'
import {BsTrash3} from 'react-icons/bs'

export const CommentPost = () => {
  return (
    <div className='w-full p-4 border-t-2 border-gray-600 flex items-start'>
        
        <img className='w-[calc(2.8rem+12px)] h-[calc(2.8rem+12px)] rounded-md border-4 border-gray-800 outline outline-2 outline-green-400 mr-4  ' src="https://avatars.githubusercontent.com/u/122836400?v=4" />
        
        <div className='w-full '>
            <div className='bg-gray-900 px-4 pt-4 pb-6 rounded-lg space-y-4 mb-4  '>
                <header className='flex justify-between '>
                    <div>
                        <strong>João Pedro</strong>
                    </div>
                    <button title='Botão de deletar' ><BsTrash3/></button>
                </header>
                <p>Muito bom Devon, parabéns!! 👏👏</p>
            </div>
            <footer>
                like 
            </footer>
        </div>
        
    </div>
  )
}
