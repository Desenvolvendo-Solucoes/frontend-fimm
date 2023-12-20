'use client'
import React, { useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import NewEpi from '@/components/NewEpi'

const Epi: React.FC = () => {
  const initialData = [
    {
      id: '1',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '2',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '3',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '4',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '5',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '6',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '7',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '8',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '9',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },
    {
      id: '10',
      img: 'John',
      epi: 'Bota',
      day: '10',
      brand: 'Fimm Brasil',
      action: 'False',
    },

    // Adicione mais dados conforme necessário
  ]

  const columns: ColumnData[] = [
    { Header: 'Imagem', accessor: 'img' },
    { Header: 'EPI', accessor: 'epi' },
    { Header: 'Dias', accessor: 'day' },
    { Header: 'Marca', accessor: 'brand' },
    { Header: 'Ações', accessor: 'action' },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)
  return (
    <Container>
      <Sidebar screen="Epi" />
      <div className=" p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length} Equipamentos
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <NewEpi />
          </div>
        </div>
        <div className="h-[calc(100%-3.75rem)] w-full">
          <DataGrid data={rows} columns={columns} />
        </div>
      </div>
    </Container>
  )
}
export default Epi
