import React from 'react'

interface Data {
  data: Array<any>
}

const Td: React.FC<Data> = ({ data }) => {
  return (
    <td className="w-4/12  justify-center overflow-hidden whitespace-nowrap p-2">
      {data}
    </td>
  )
}

export default Td
