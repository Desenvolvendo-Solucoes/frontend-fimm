'use client'
import React, { useEffect } from 'react'
import { ColumnData, Data } from '@/types'
import Row from './Row'
import Column from './Column'

interface DataGridProps {
  data: Data[]
  columns: ColumnData[]
}

interface ColumnWidths {
  [columnName: string]: number
}

const DataGrid: React.FC<DataGridProps> = ({ data, columns }) => {
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
    <div className="h-full ">
      <table className="flex h-full w-auto flex-auto flex-col overflow-scroll hide-scrollbar">
        <thead className="mb-2">
          <tr className="flex w-max  items-center rounded border border-gray-400">
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
          <tbody className="flex w-max flex-auto flex-col rounded  border border-gray-400 ">
            {data.map((row, index) => (
              <tr
                key={row.id}
                className={[
                  'flex items-center rounded border-gray-400 bg-datagrid-row text-center odd:bg-white',
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
