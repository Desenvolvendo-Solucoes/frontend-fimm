/* eslint-disable prettier/prettier */
import React, { ReactElement } from 'react'

type Props = {
  selected: boolean
  children: ReactElement
}

const IconsView: React.FC<Props> = ({ selected, children }: Props) => {
  return (
    <div
      className={`${selected ? 'bg-[#1E1685]/[0.30]' : 'bg-white'
        } flex items-center justify-center cursor-pointer`}
    >
      {children}
    </div>
  )
}

export default IconsView
