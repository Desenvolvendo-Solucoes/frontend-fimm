import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData } from '@/types'
import NewEpi from '@/components/NewEpi'

export default function equipamento() {
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
  return (
    <Container>
      <Sidebar screen="Epi" />
      <div className="p-6">
        <div className="mb-10 ml-9 mt-10 flex w-full  ">
          <NewEpi />
        </div>
        <DataGrid data={initialData} columns={columns} page="Equipamento" />
      </div>
    </Container>
  )
}
