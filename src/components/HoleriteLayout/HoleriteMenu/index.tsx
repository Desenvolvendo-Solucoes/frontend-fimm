import React from 'react'
import HoleriteMenuButton from '../HoleriteMenuButton'

const HoleriteMenu: React.FC = () => {
  return (
    <div className="h-full w-full p-8">
      <div className="flex h-8 w-auto flex-1 items-center bg-[red] ">
        <HoleriteMenuButton />
        <HoleriteMenuButton />
      </div>
    </div>
  )
}

export default HoleriteMenu
