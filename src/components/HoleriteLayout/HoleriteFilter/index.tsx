import React from 'react'
import Filter from './Filter'
import LayoutView from './LayoutView'
import Search from './Search'

type Props = {
  type: 'filter' | 'search'
}

const HoleriteFilter: React.FC<Props> = ({ type }: Props) => {
  return (
    <div className="flex h-10 w-full flex-row items-center justify-between rounded-sm bg-[#EAEAEA] pl-3 pr-3">
      {type === 'filter' ? <Filter /> : <Search />}
      <LayoutView />
    </div>
  )
}

export default HoleriteFilter
