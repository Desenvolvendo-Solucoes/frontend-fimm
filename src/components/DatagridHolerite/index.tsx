'use client'
import React, { useEffect } from 'react'
import Column from '../Datagrid/Column'
import Row from '../Datagrid/Row'
import { ColumnData, Data } from '@/types'

type Props = {
  columns: ColumnData[]
  data: Data[]
}

interface ColumnWidths {
  [columnName: string]: number
}

const DatagridHolerites: React.FC<Props> = ({ columns, data }: Props) => {
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
    <table className="flex w-auto flex-auto flex-col overflow-scroll ">
      <thead className="mb-2">
        <tr className="flex h-12 w-max items-center border border-gray-400">
          {columns.map((column, index) => (
            <div
              // eslint-disable-next-line prettier/prettier
              className={`flex items-center justify-around ${column.accessor === 'atualizado' ? 'ml-2 text-left' : 'text-center'}`}
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
      <div className="p-1">
        <tbody className="flex w-max flex-auto flex-col rounded border border-b-0 border-[black] ">
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={[
                'flex items-center bg-datagrid-row text-center odd:bg-white',
                `${index === 0 ? '' : 'border-t '} `,
              ].join(' ')}
            >
              {columns.map((column, index) => {
                const CellComponent = column.Cell || Row
                return (
                  <td
                    style={{ width: columnWidths[column.accessor] }}
                    // eslint-disable-next-line prettier/prettier
                    className={`flex h-12 resize-x ${column.accessor === 'atualizado' ? 'w-full text-left' : 'items-center'}  border-b-[1px] border-[black] p-2 text-center`}
                    key={index}
                  >
                    <CellComponent
                      value={row[column.accessor].toString()}
                      row={row}
                    />
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </div>
    </table>
  )
}

export default DatagridHolerites
