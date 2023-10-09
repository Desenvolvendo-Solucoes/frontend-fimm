import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData } from '@/types'

export default function epi() {
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
      <DataGrid data={initialData} columns={columns} page="Epi" />
    </Container>
  )
}
