import React from 'react'
import HoleriteMenuButton from '../HoleriteMenuButton'

let action: Function

const HoleriteMenu: React.FC = () => {
  return (
    <div className="mb-2 h-8 w-full">
      <div className=" grid h-8 w-full flex-1 grid-cols-[9rem,9rem,calc(100%-18rem)] items-center">
        <HoleriteMenuButton
          text="Holerite"
          select={true}
          action={() => {
            action()
          }}
        />
        <HoleriteMenuButton
          text="Adicionar holerite"
          select={false}
          action={() => {
            action()
          }}
        />
        <div className="flex h-full w-full flex-col">
          <p className="invisible">t</p>
          <div className="h-1 bg-[#D9D9D9]" />
        </div>
      </div>
    </div>
  )
}

export default HoleriteMenu
