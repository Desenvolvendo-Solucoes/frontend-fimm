import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="grid h-screen w-screen grid-cols-[18%,82%] grid-rows-1 gap-0 overflow-x-hidden">
      {children}
    </div>
  )
}

export default Container
