'use client'

import { Edit2 } from 'react-feather'
import React, { useState } from 'react'
import Td from './Td'
import Th from './Th'
import Avatar from './Avatar'

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
    <table className="flex w-auto flex-auto flex-col">
      <thead className="mb-10 ">
        <tr className=" flex items-center  border border-gray-500">
          <th className="p-2">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAllChange}
            />
          </th>
          <div className="w-3/12"></div>
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
      <div className="rounded border border-gray-500">
        <tbody className="flex w-auto flex-auto flex-col">
          {data.map((item, index) => (
            <tr
              key={index}
              className={` ${
                index === 0 ? '' : 'border-t'
              } flex border-gray-500 text-center odd:bg-white even:bg-datagrid-primary`} /// Altera a cor das Linhas do dataGrid
            >
              <td className="p-2 ">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <div className="w-10">
                <Avatar
                  imageUrl={item.avatar}
                  altText="Avatar"
                  solicitante={item.solicitante}
                />
              </div>
              <Td data={item.solicitante} />

              <Td data={item.matricula} />
              <Td data={item.epi} />
              <Td data={item.dataSolicitada.toDateString()} />
              <Td data={item.quantidade} />
              <Td data={item.imagem} />
              <Td data={item.tamanho} />
              <Td data={item.status} />
              <Td data={<Edit2 className="inline-block" color="#1E1685" />} />
            </tr>
          ))}
        </tbody>
      </div>
    </table>
  )
}

export default DataGrid
