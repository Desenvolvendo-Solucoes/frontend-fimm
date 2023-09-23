import React from 'react'

type Props = {
  text: string
  select: boolean
  action: () => void
}

const HoleriteMenuButton: React.FC<Props> = ({ text, select }: Props) => {
  return (
    <div className="flex h-full w-36 cursor-pointer flex-col items-center">
      <p className={`${select ? ' text-[#1E1685]' : ''}`}>{text}</p>
      <div
        className={`h-1 w-full ${select ? 'bg-[#1E1685]' : 'bg-[#D9D9D9]'} `}
      ></div>
    </div>
  )
}

export default HoleriteMenuButton
