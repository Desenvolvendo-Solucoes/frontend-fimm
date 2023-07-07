import React from 'react'

interface Data {
  data: Array<any>
}

const Th: React.FC<Data> = ({ data }) => {
  return (
    <>
      <th className="w-4/12 overflow-hidden whitespace-nowrap p-2">{data}</th>
      <div className="flex h-6  border-l-2 border-gray-300 " />
    </>
  )
}

export default Th
