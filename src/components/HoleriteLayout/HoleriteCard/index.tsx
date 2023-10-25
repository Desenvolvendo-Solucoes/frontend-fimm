import Calendar from '@/components/Icons/Calendar'
import React from 'react'

const HoleriteCard: React.FC = () => {
  return (
    <a href="/holerites/01-2023">
      <div
        className="flex h-24 w-56 cursor-pointer flex-row items-center justify-center gap-3 rounded-lg border bg-[white] shadow-md duration-75 hover:bg-[#ececec]"
        onClick={() => {
          console.log('clicou no holeirte')
        }}
      >
        <Calendar />
        <div className="flex flex-col items-center justify-center">
          <p className="text-[30px] font-bold">01/2023</p>
          <p>Janeiro</p>
        </div>
      </div>
    </a>
  )
}

export default HoleriteCard
