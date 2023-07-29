'use client'

import { Edit2 } from 'react-feather'
import React, { useState } from 'react'
import Td from './Td'
import Th from './Th'
import AvatarIcon from '../Avatar'
import Search from '../Search'
import ExportCsv from '../ExportCsv'
import Filtering from '../Filtering'
import { DataType } from '@/types'

interface DataGridProps {
  data: DataType[]
}

const DataGrid: React.FC<DataGridProps> = ({ data }) => {
  const [selectAll, setSelectAll] = useState(false)
  const [selectedRows, setSelectedRows] = useState<Array<number>>([])
  const [query, setQuery] = useState('')

  const handleSearchChange = (value: string) => {
    setQuery(value)
  }

  const filteredData = data.filter((value, index, item) => {
    const searchableFields = [
      'tamanho',
      'solicitante',
      'matricula',
      'epi',
      'status',
    ] // Lista de campos para realizar a busca
    return searchableFields.some((field) =>
      value[field].toLowerCase().includes(query.toLowerCase()),
    )
  })

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

  const totalItems = filteredData.length

  return (
    <div>
      <div className="mb-10 mt-10 flex  w-full justify-around">
        <span className="text-xl font-bold">
          Total de: {totalItems} Solicitações{' '}
        </span>
        <Search
          fields={['tamanho', 'solicitante', 'matricula', 'epi', 'status']}
          onChange={handleSearchChange}
        />
        <Filtering />
        <ExportCsv />
      </div>
      <table className=" ml-9 flex w-auto flex-auto flex-col">
        <thead className="mb-10 ">
          <tr className=" flex items-center  border border-gray-400">
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
        <div className="rounded border border-gray-400">
          <tbody className="flex w-auto flex-auto flex-col">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={[
                  'flex border-gray-400 bg-datagrid-row text-center odd:bg-white',
                  `${index === 0 ? '' : 'border-t'} `,
                ].join(' ')} /// Altera a cor das Linhas do dataGrid
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(index)}
                    onChange={() => handleCheckboxChange(index)}
                  />
                </td>
                <Td data={item.solicitante}>
                  <AvatarIcon img={item.avatar} nome={item.solicitante} />
                </Td>
                <Td data={item.matricula} />
                <Td data={item.epi} />
                <Td data={item.dataSolicitada} />
                <Td data={item.quantidade} />
                <Td data={item.imagem} />
                <Td data={item.tamanho} />
                <Td data={item.status} />
                <Td>
                  <Edit2 className="text-primary" />
                </Td>
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  )
}

export default DataGrid
