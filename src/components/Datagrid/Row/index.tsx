import { Data, DataGridColumn } from '@/types'
import React from 'react'

type Props = {
  id: string,
  row: Data,
  column: string
}

const Row: React.FC<Props> = ({ id, row, column }) => {
  return (
    <div className=" ml-2 mr-2 flex w-full items-center overflow-hidden whitespace-nowrap text-center">
      <td className=" w-11/12 overflow-hidden whitespace-nowrap truncate ">{row[column]}</td>
    </div>
  )
}

export default Row
