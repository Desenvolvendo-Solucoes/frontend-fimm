'use client'
import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import SolicitacoesAction from '@/components/SolicitacoesAction'

export default async function solicitacoes() {
  const initialData = [
    {
      id: '1',
      Name: 'John',
      Age: '30',
      Position: 'Developer',
    },
    { id: '2', Name: 'Jane', Age: '40', Position: 'Designer' },
    // Adicione mais dados conforme necessário
  ]

  const columns = [
    { Header: 'Name', accessor: 'Name' },
    { Header: 'Age', accessor: 'Age' },
    { Header: 'Position', accessor: 'Position' },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Ações',
      accessor: 'Ações',
      Cell: SolicitacoesAction,
    },
  ]

  return (
    <Container>
      <Sidebar screen="Solicitações" />
      <DataGrid data={initialData} columns={columns} page="Solicitações" />
    </Container>
  )
}
