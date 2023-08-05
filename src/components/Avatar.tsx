import React from 'react'


interface avatar {
  src: string;
  className: string;
}

export const Avatar = ({src, className}: avatar) => {
  return (
    <img className={className} src={src} />
  )
}