import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData } from '@/types'

export default function funcionarios() {
  const initialData = [
    { id: '1', Name: 'John', Age: '30', Position: 'Developer' },
    { id: '2', Name: 'Jane', Age: '40', Position: 'Designer' },
    // Adicione mais dados conforme necessário
  ]

  const columns: ColumnData[] = [
    { Header: 'Nome', accessor: 'Name' },
    { Header: 'Idade', accessor: 'Age' },
    { Header: 'Position', accessor: 'Position' },
  ]
  return (
    <Container>
      <Sidebar screen="Funcionarios" />
      <DataGrid data={initialData} columns={columns} page="Solicitações" />
    </Container>
  )
}
