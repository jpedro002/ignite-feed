'use client'

import { Header } from '@/components/Header';
import {Post} from '@/components/Post';
import { SideBar } from '@/components/SideBar';
export default function Home() {
  return (
    <>
      <Header/>
      <div className="max-w-6xl my-8 mx-auto py-0 px-4 grid lg:grid-cols-[16rem_1fr] grid-cols-1  items-start gap-8  ">
        <SideBar/>
        <main className='space-y-8'>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}
