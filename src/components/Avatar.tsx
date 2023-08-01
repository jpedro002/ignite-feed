import { avatar } from '@/types'
import React from 'react'




export const Avatar = ({src, className}: avatar) => {
  return (
    <img className={className} src={src} />
  )
}