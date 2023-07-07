import React from 'react'

interface AvatarProps {
  imageUrl: string
  altText: string
  solicitante: string
}

const Avatar: React.FC<AvatarProps> = ({ imageUrl, altText, solicitante }) => {
  const firstLetter = solicitante.charAt(0).toUpperCase()
  if (imageUrl) {
    return (
      <div className="relative flex h-10 w-10 overflow-hidden rounded-full p-1">
        <img
          className="h-full w-full justify-center rounded-full object-cover"
          src={imageUrl}
          alt={altText}
        />
      </div>
    )
  }
  return (
    <div className=" relative mt-0.5 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-primary p-1 text-white">
      <span className="h-full w-full justify-center rounded-full object-cover text-lg">
        {firstLetter}
      </span>
    </div>
  )
}

export default Avatar
