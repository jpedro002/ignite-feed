import React from 'react'

export const Post = () => {
  return (
    <article className='border-2 border-green-500 rounded-lg' >//post 
      <header className='flex justify-between  ' >
        <div className='flex space-x-3 '>
            <img className='w-[calc(2.8rem+12px)] h-[calc(2.8rem+12px)] rounded-md border-4 border-gray-800 outline outline-2 outline-green-400 box ' src="https://avatars.githubusercontent.com/u/122836400?v=4"  />
            <div>
              <h3 >Jane Cooper</h3>
              <p>Front-end Developer</p>
            </div>
        </div>
        <time dateTime=''> publicado há 1h</time>
      </header>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quia repudiandae rem impedit iste consectetur ad voluptatibus temporibus eveniet possimus accusantium ab nemo ex at, dolore beatae. Consequatur, mollitia dolores!
    </article>
  )
}
