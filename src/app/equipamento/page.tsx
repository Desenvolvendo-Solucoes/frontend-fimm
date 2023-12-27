'use client'
import React, { useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import NewEquipamento from '@/components/NewEquipamento'

const Equipamento: React.FC = () => {
  const initialData = [
    {
      id: '1',
      Img: 'John',
      EPI: 'Bota',
      Day: '10',
      Brand: 'Fimm Brasil',
      Action: 'False',
    },
    {
      id: '1',
      Img: 'John',
      EPI: 'Bota',
      Day: '10',
      Brand: 'Fimm Brasil',
      Action: 'False',
    },
    // Adicione mais dados conforme necessário
  ]

  const columns: ColumnData[] = [
    { Header: 'Imagem', accessor: 'Img' },
    { Header: 'EPI', accessor: 'EPI' },
    { Header: 'Dias', accessor: 'Day' },
    { Header: 'Marca', accessor: 'Brand' },
    { Header: 'Ações', accessor: 'Action' },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)
  return (
    <Container>
      <Sidebar screen="Equipamento" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length} EPIs
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <NewEquipamento />
          </div>
        </div>
        <div className="h-[calc(100%-3.75rem)] w-full">
          <DataGrid data={initialData} columns={columns} />
        </div>
      </div>
    </Container>
  )
}
export default Equipamento
