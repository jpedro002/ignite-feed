import React, { useState } from "react"
import { CommentPost } from "./CommentPost"
import { Avatar } from "./Avatar"
import { PostProps } from "@/types/types"

export const Post: React.FC<PostProps> = ({
  author,
  role,
  avatarUrl,
  postContent,
}) => {
  const [comments, setComments] = useState<string[]>([])
  const [newCommentContent, setNewCommentContent] = useState("")

  const handleSubmitComment = (event: React.FormEvent<HTMLFormElement>,) => {
    event.preventDefault()
    const trimmedComment = newCommentContent.trim()
    if (trimmedComment) {
      setComments((prevComments) => [...prevComments, trimmedComment])
      setNewCommentContent("")
    }
    
  }

  const handleDeleteComment = (index:number) => {
    setComments((prevComments) => {
      return prevComments.filter((comentario, i) => i !== index)
    })
  }
  
  

  return (
    <article className="rounded-lg px-10 pt-10 pb-5 bg-gray-800">
      <header className="flex justify-between items-center">
        <div className="flex space-x-3">
          <Avatar
            className="w-[calc(3rem+12px)] h-[calc(3rem+12px)] 
            rounded-md border-4 border-gray-800 
            outline outline-2 outline-green-400"
            src={avatarUrl}
          />
          <div className="flex flex-col justify-center">
            <h3>{author}</h3>
            <p>{role}</p>
          </div>
        </div>
        <time className="md:visible invisible" dateTime="">publicado há 1h</time>
      </header>
      <div className="space-y-2 mt-4 leading-relaxed text-gray-300">
        <p>{postContent}</p>

        <form
          onSubmit={handleSubmitComment}
          className="w-full mt-6 pt-6 border-t-2 border-t-gray-600  flex flex-col items-start space-y-1"
        >
          <textarea
            className="resize-none peer w-full h-24  rounded-lg p-4 bg-gray-900 border-[1.5px] border-[#00B37E] leading-snug mb-3"
            placeholder="Deixe seu comentario"
            value={newCommentContent}
            onChange={(event) => setNewCommentContent(event.target.value)}
          />
          <button
            className="
              py-2 px-3 mt-4 rounded-lg peer-focus:visible peer-focus:max-h-none invisible bg-green-700 font-bold cursor-pointer duration-200 hover:bg-green-600"
            type="submit"
          >
            Comentar
          </button>
        </form>
        {comments.map((comment, index) => (
          <CommentPost key={index} content={comment} onClick={() => handleDeleteComment(index)} />
        ))}
      </div>
    </article>
  )
}
