import React from 'react'

import Search from '../Search'
import ExportCsv from '../ExportCsv'
import Filtering from '../Filtering'
import { ColumnData, Data } from '@/types'
import Row from './Row'
import Column from './Column'

interface DataGridProps {
  data: Data[]
  columns: ColumnData[]
  page: string
}

const DataGrid: React.FC<DataGridProps> = ({ data, columns, page }) => {
  // const [query, setQuery] = useState('')

  // const handleSearchChange = (value: string) => {
  //   setQuery(value)
  // }

  // const filteredData = data.filter((value, index, item) => {
  //   const searchableFields = [
  //     'tamanho',
  //     'solicitante',
  //     'matricula',
  //     'epi',
  //     'status',
  //     'nome',
  //     'cpf',
  //   ] // Lista de campos para realizar a busca
  //   return searchableFields.some((field) =>
  //     value[field]?.toLowerCase().includes(query.toLowerCase()),
  //   )
  // })

  // const totalItems = filteredData.length

  return (
    <div>
      <div className="mb-10 ml-9 mt-10 flex  w-full ">
        <div className="w-1/3">
          <span className="text-xl font-bold">
            Total de: {data.length} Solicitações
          </span>
        </div>
        <Search fields={data} />
        <Filtering screen={page} />
        <ExportCsv screen={page} />
      </div>

      <table className="ml-9 mr-4 flex w-auto flex-auto flex-col">
        <thead className="mb-10">
          <tr className="flex items-center  border border-gray-400">
            {columns.map((column, index) => (
              <div
                className="flex w-4/12 items-center justify-around text-center"
                key={index}
              >
                <th className="w-full overflow-hidden whitespace-nowrap">
                  <Column name={column.Header} />
                </th>
              </div>
            ))}
          </tr>
        </thead>
        <div className="rounded border border-gray-400">
          <tbody className="flex w-auto flex-auto flex-col">
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={[
                  'flex items-center border-gray-400 bg-datagrid-row text-center odd:bg-white',
                  `${index === 0 ? '' : 'border-t '} `,
                ].join(' ')}
              >
                {columns.map((column, index) => {
                  const CellComponent = column.Cell || Row
                  return (
                    <td
                      className=" flex w-4/12 items-center justify-around border border-gray-200 p-2 text-center"
                      key={index}
                    >
                      <CellComponent value={row[column.accessor]} row={row} />
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </div>
      </table>
    </div>
  )
}

export default DataGrid
