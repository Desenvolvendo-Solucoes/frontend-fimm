'use client'
import React, { useEffect } from 'react'

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

interface ColumnWidths {
  [columnName: string]: number
}

const DataGrid: React.FC<DataGridProps> = ({ data, columns, page }) => {
  const [columnWidths, setColumnWidths] = React.useState<ColumnWidths>({})

  const handleMouseDown = (e: React.MouseEvent, columnName: string) => {
    const initialMouseX = e.clientX
    const initialWidth = columnWidths[columnName]

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = initialWidth + (e.clientX - initialMouseX)
      setColumnWidths((prevWidths) => ({
        ...prevWidths,
        [columnName]: newWidth,
      }))
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const setColounWidth = () => {
    // eslint-disable-next-line array-callback-return
    columns.map((column) => {
      console.log(column.accessor)

      setColumnWidths((prevWidths) => ({
        ...prevWidths,
        [column.accessor]: column.width ? column.width : 150,
      }))
    })
  }

  useEffect(() => {
    setColounWidth()
  }, [])

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

      <table className="ml-9 mr-4 flex w-auto flex-auto flex-col overflow-scroll">
        <thead className="mb-10">
          <tr className="flex w-max  items-center border border-gray-400">
            {columns.map((column, index) => (
              <div
                className="flex items-center justify-around text-center"
                key={index}
              >
                <th
                  style={{ width: columnWidths[column.accessor] }}
                  className="resize-x overflow-hidden whitespace-nowrap"
                  onMouseDown={(e) => handleMouseDown(e, column.accessor)}
                >
                  <Column name={column.Header} />
                </th>
              </div>
            ))}
          </tr>
        </thead>
        <div className="">
          <tbody className="flex w-max flex-auto flex-col rounded border border-gray-400 ">
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
                      style={{ width: columnWidths[column.accessor] }}
                      className={`flex resize-x items-center justify-around border border-gray-200 p-2 text-center`}
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
