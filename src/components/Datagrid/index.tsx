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
  column: string[]
  screen: string
}

const DataGrid: React.FC<DataGridProps> = ({ data, column, screen }) => {
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
      'nome',
      'cpf',
    ] // Lista de campos para realizar a busca
    return searchableFields.some((field) =>
      value[field]?.toLowerCase().includes(query.toLowerCase()),
    )
  })

  const totalItems = filteredData.length

  return (
    <div>
      <div className="mb-10 ml-9 mt-10 flex  w-full ">
        <div className="w-1/3">
          <span className="text-xl font-bold">
            Total de: {totalItems} Solicitações
          </span>
        </div>
        <Search fields={column} onChange={handleSearchChange} />
        <Filtering screen={screen} />
        <ExportCsv screen={screen} />
      </div>
      <table className=" ml-9 mr-4 flex w-auto flex-auto flex-col">
        <thead className="mb-10 ">
          <tr className=" flex items-center  border border-gray-400">
            <th className="p-2"></th>
            <Th data={column} />
          </tr>
        </thead>
        <div className="rounded border border-gray-400">
          <tbody className="flex w-auto flex-auto flex-col">
            {filteredData.map((item, index) => (
              <tr
                key={index}
                className={[
                  'flex items-center border-gray-400 bg-datagrid-row text-center odd:bg-white',
                  `${index === 0 ? '' : 'border-t '} `,
                ].join(' ')} /// Altera a cor das Linhas do dataGrid
              >
                {item.solicitante ? (
                  <Td data={item.solicitante}>
                    <AvatarIcon img={item.avatar} nome={item.solicitante} />
                  </Td>
                ) : (
                  <Td data={item.matricula} />
                )}
                {item.solicitante ? (
                  <Td data={item.matricula} />
                ) : (
                  <Td data={item.nome} />
                )}
                {item.epi ? <Td data={item.epi} /> : <Td data={item.cpf} />}
                {item.dataSolicitada ? (
                  <Td data={item.dataSolicitada} />
                ) : (
                  <Td data={item.funcao} />
                )}
                {item.quantidade ? (
                  <Td data={item.quantidade} />
                ) : (
                  <Td data={item.base} />
                )}
                {item.imagem ? (
                  <Td data={item.imagem} />
                ) : (
                  <Td data={item.regiao} />
                )}
                {item.tamanho ? (
                  <Td data={item.tamanho} />
                ) : (
                  <Td data={item.email} />
                )}
                {item.status ? <Td data={item.status} /> : null}
                {item.status ? (
                  <Td>
                    <Edit2 className="text-primary" />
                  </Td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  )
}

export default DataGrid
