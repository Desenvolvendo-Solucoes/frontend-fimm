import React from 'react'
import HoleriteMenuButton from '../HoleriteMenuButton'

type Props = {
  setPage: React.Dispatch<React.SetStateAction<string>>
  page: string
}

const HoleriteMenu: React.FC<Props> = ({ setPage, page }: Props) => {
  return (
    <div className="mb-2 h-8 w-full">
      <div className=" grid h-8 w-full flex-1 grid-cols-[9rem,9rem,calc(100%-18rem)] items-center">
        <HoleriteMenuButton
          text="Holerite"
          select={page === 'holerites'}
          action={() => {
            console.log('clicou no holerites')

            setPage('holerites')
          }}
        />
        <HoleriteMenuButton
          text="Adicionar holerite"
          select={page === 'addHolerites'}
          action={() => {
            setPage('addHolerites')
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
