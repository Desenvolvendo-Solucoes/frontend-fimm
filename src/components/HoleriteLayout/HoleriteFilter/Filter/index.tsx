import React from 'react'

import { ChevronLeft, ChevronRight } from 'react-feather'

const Filter: React.FC = () => {
  return (
    <div className="flex h-6 w-72 flex-row items-center justify-between bg-white pl-2">
      <p className="m-0  flex cursor-default p-0 text-[#868686]">
        Ano base - 2023
      </p>
      <div className="flex cursor-pointer flex-row">
        <ChevronLeft size={18} />
        <ChevronRight size={18} />
      </div>
    </div>
  )
}

export default Filter
