import React from 'react'

interface Data {
  data: string[] // Alterei o tipo para ser um array de strings
}

const Th: React.FC<Data> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="flex w-4/12 items-center justify-around text-center"
        >
          <th className=" w-full overflow-hidden whitespace-nowrap ">{item}</th>
          <div className=" h-6  border-l-2 border-gray-300 " />
        </div>
      ))}
    </>
  )
}

export default Th
