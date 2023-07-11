import React, { ReactNode } from 'react'

interface Data {
  data?: string
  children?: ReactNode
}

const Td: React.FC<Data> = ({ data, children }) => {
  if (children) {
    return (
      <td className="flex w-4/12 justify-start gap-4 overflow-hidden whitespace-nowrap p-2">
        {children}
        {data}
      </td>
    )
  }
  return (
    <td className="flex w-4/12 justify-center overflow-hidden whitespace-nowrap p-2">
      {children}
      {data}
    </td>
  )
}

export default Td
