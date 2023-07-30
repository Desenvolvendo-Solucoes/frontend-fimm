import React, { ReactNode } from 'react'

interface Data {
  data?: string
  children?: ReactNode
}

const Td: React.FC<Data> = ({ data, children }) => {
  if (children) {
    return (
      <div className="ml-2 mr-2 flex w-full items-center overflow-hidden whitespace-nowrap text-start">
        <td className=" w-10/12 justify-between overflow-hidden whitespace-nowrap  ">
          {children}
          {data}
        </td>
      </div>
    )
  }
  return (
    <div className=" ml-2 mr-2 flex w-full items-center overflow-hidden whitespace-nowrap text-center">
      <td className=" w-11/12 overflow-hidden whitespace-nowrap ">
        {children}
        {data}
      </td>
    </div>
  )
}

export default Td
