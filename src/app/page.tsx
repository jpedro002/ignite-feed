'use client'

import { Header } from "@/components/Header"
import { Post } from "@/components/Post"
import { SideBar } from "@/components/SideBar"
import useFetch from "@/hooks/useFetch"

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://64cce0cc2eafdcdc851a6823.mockapi.io/post"
  )

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      </div>
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl my-8 mx-auto py-0 px-4 grid lg:grid-cols-[16rem_1fr] grid-cols-1 items-start gap-8">
        <SideBar />
        <main className="space-y-8">
          {data?.map((post) => (
            <Post
              key={post.id}
              author={post.name}
              avatarUrl={post.avatarUrl}
              postContent={post.paragraph}
              role={post.role}
            />
          ))}
        </main>
      </div>
    </>
  )
}
