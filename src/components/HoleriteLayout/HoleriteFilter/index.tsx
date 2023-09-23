import React from 'react'
import Filter from './Filter'
import LayoutView from './LayoutView'

const HoleriteFilter: React.FC = () => {
  return (
    <div className="flex h-10 w-full flex-row items-center justify-between rounded-sm bg-[#EAEAEA] pl-3 pr-3">
      <Filter />
      <LayoutView />
    </div>
  )
}

export default HoleriteFilter
