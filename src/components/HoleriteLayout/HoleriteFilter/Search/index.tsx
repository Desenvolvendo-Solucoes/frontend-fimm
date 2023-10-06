import React from 'react'

import { Search } from 'react-feather'

const Filter: React.FC = () => {
  return (
    <div className="flex h-6 w-72 cursor-text flex-row items-center justify-between bg-white pl-2">
      <p className="m-0  flex flex cursor-default cursor-text flex-row items-center justify-center gap-2 p-0 text-[#868686]">
        <Search color="#868686" size={14} />
        Faça uma busca
      </p>
    </div>
  )
}

export default Filter
