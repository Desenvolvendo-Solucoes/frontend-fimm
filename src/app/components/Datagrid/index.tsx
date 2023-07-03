'use client'

import { Edit2 } from 'react-feather'
import React, { useState } from 'react'
import Td from './Td'
import Th from './Th'

interface DataGridProps {
  data: Array<any>
}

const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState<Array<number>>([])

  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedRows([])
    } else {
      const newSelectedRows = data.map((item, index) => index)
      setSelectedRows(newSelectedRows)
    }
    setSelectAll(!selectAll)
  }

  const handleCheckboxChange = (index: number) => {
    const selectedIndex = selectedRows.indexOf(index)
    if (selectedIndex === -1) {
      setSelectedRows([...selectedRows, index])
    } else {
      const updatedRows = [...selectedRows]
      updatedRows.splice(selectedIndex, 1)
      setSelectedRows(updatedRows)
    }
  }

  return (
    <table className=" flex w-auto flex-auto flex-col">
      <thead className="mb-10 ">
        <tr className=" flex items-center  border-2 border-black">
          <th className="p-2">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
          </th>
          <Th data={['Solicitante']} />
          <Th data={['Matrícula']} />
          <Th data={['EPI']} />
          <Th data={['Data Solicitada']} />
          <Th data={['Quantidade']} />
          <Th data={['Imagem']} />
          <Th data={['Tamanho']} />
          <Th data={['Status']} />
          <Th data={['Ações']} />
        </tr>
      </thead>
      <div className="rounded border-2 border-black">
        <tbody className="flex w-auto flex-auto flex-col">
          {data.map((item, index) => (
            <tr
              key={index}
              className={` ${
                index === 0 ? '' : 'border-t-2'
              } flex border-black text-center odd:bg-white even:bg-purple-500`} /// Altera a cor das Linhas do dataGrid
            >
              <td className="p-2">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <Td data={item.solicitante} />
              <Td data={item.matricula} />
              <Td data={item.epi} />
              <Td data={item.dataSolicitada.toDateString()} />
              <Td data={item.quantidade} />
              <Td data={item.imagem} />
              <Td data={item.tamanho} />
              <Td data={item.status} />
              <Td data={<Edit2 />} />
            </tr>
          ))}
        </tbody>
      </div>
    </table>
  )
}

export default DataGrid
