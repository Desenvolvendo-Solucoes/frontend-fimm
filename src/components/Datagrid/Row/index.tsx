import React from 'react'

type Data = {
  value: string
}

const Row: React.FC<Data> = ({ value }) => {
  return (
    <div className=" ml-2 mr-2 flex w-full items-center overflow-hidden whitespace-nowrap text-center">
      <td className=" w-11/12 overflow-hidden whitespace-nowrap ">{value}</td>
    </div>
  )
}

export default Row
