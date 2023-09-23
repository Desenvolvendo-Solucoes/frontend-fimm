import React from 'react'
import HoleriteMenu from './HoleriteMenu'
import HoleriteFilter from './HoleriteFilter'
import HoleriteCard from './HoleriteCard'

const HoleriteLayout: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#F9FBFD]/[0.30] p-8">
      <HoleriteMenu />
      <h1 className="mb-4 text-[20px] font-bold">Holerites - 2023</h1>
      <HoleriteFilter />
      <h1 className="mb-4 mt-4 text-[20px] ">Selecione o mês</h1>
      <div className="hide-scrollbar flex w-full flex-row flex-wrap gap-x-8 gap-y-5 overflow-scroll pb-2 pt-2 ">
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
        <HoleriteCard />
      </div>
    </div>
  )
}

export default HoleriteLayout
