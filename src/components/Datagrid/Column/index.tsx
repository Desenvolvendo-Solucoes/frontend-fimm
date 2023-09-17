'use client'
import { ResizableColumnProps } from '@/types'
import React, { useState, useEffect, useRef } from 'react'

const Column: React.FC<ResizableColumnProps> = ({ name }) => {
  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(0)
  const resizableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const resizableElement = resizableRef.current
    if (resizableElement) {
      setWidth(resizableElement.offsetWidth)
    }
  }, [])

  return (
    <div ref={resizableRef}>
      <div className="m-0 h-full w-full overflow-hidden whitespace-nowrap border-r-2 border-gray-300 p-0">
        {name}
      </div>
    </div>
  )
}

export default Column
