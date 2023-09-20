'use client'
import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData } from '@/types'
// import AvatarIcon from '@/components/Avatar'

export default function configuracoes() {
  const initialData = [
    {
      id: '1',
      Name: 'John',
      Epi: '30',
      Day: 'Developer',
      Brand: 'Honeywell',
      Actions: 'False',
    },
    {
      id: '1',
      Name: 'John',
      Epi: '30',
      Day: 'Developer',
      Brand: 'Honeywell',
      Actions: 'False',
    },
    // Adicione mais dados conforme necessário
  ]

  const columns: ColumnData[] = [
    { Header: 'Imagem', accessor: 'Name' },
    { Header: 'EPI', accessor: 'Epi' },
    { Header: 'Dias', accessor: 'Day' },
    { Header: 'Marca', accessor: 'Brand' },
    { Header: 'Ações', accessor: 'Actions' },
  ]
  return (
    <Container>
      <Sidebar screen="Configurações" />
      <DataGrid data={initialData} columns={columns} page="Configurações" />
    </Container>
  )
}
