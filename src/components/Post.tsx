import React from 'react'
import { CommentPost } from './CommentPost'

export const Post = () => {
  return (
    <article className='rounded-lg px-10 pt-10 pb-5 bg-gray-800 ' >
      <header className='flex justify-between items-center ' >
        <div className='flex space-x-3 '>
          <img className='w-[calc(2.8rem+12px)] h-[calc(2.8rem+12px)] rounded-md border-4 border-gray-800 outline outline-2 outline-green-400 box ' src="https://avatars.githubusercontent.com/u/122836400?v=4" />
          <div>
            <h3 >João Pedro</h3>
            <p>Front-end Developer</p>
          </div>
        </div>
        <time dateTime=''> publicado há 1h</time>
      </header>
      <div className='space-y-2 mt-4 leading-relaxed text-gray-300'>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          👉<a className='text-green-500 hover:underline hover:text-green-300 ' href=""> jane.design/doctorcare</a>
        </p>

        <p className='space-x-2  '>
          <a className='text-green-500 hover:underline hover:text-green-300 ' href="">#novoprojeto</a>
          <a className='text-green-500 hover:underline hover:text-green-300 ' href="">#nlw</a>
          <a className='text-green-500 mb hover:underline hover:text-green-300 ' href="">#rocketseat</a>
        </p>
      </div>

      <form className='w-full mt-6 pt-6 border-t-2 border-t-gray-600  flex flex-col items-start space-y-1   '>
        <textarea
          className='resize-none peer w-full h-24  rounded-lg p-4 bg-gray-900 border-[1.5px] border-[#00B37E] leading-snug mb-3 '
          placeholder='Deixe seu comentario ' />
        <button className='
            py-2 px-3 mt-4 rounded-lg peer-focus:visible peer-focus:max-h-none invisible bg-green-700 font-bold cursor-pointer duration-200 hover:bg-green-600 ' type="submit">Comentar</button>


      </form>
        <CommentPost/>
    </article>
  )
}
