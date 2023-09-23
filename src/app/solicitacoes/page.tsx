import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData } from '@/types'

export default function solicitacoes() {
  const initialData = [
    {
      id: '1',
      solicitante: 'Gustavo Aires Cavalcanti Moreira',
      cidade: 'São Paulo',
      matricula: '123456',
      epi: 'Teste',
      tamanho: 'M',
      status: 'Pendente',
      reject: '',
    },
  ]

  const columns: ColumnData[] = [
    { Header: 'Solicitante', accessor: 'solicitante', width: 250 },
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Matricula', accessor: 'matricula' },
    { Header: 'Epi', accessor: 'epi' },
    { Header: 'Tamanho', accessor: 'tamanho', width: 75 },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Ações', accessor: 'action' },
    { Header: 'Rejeição', accessor: 'reject' },
  ]

  return (
    <Container>
      <Sidebar screen="Solicitações" />
      <DataGrid data={initialData} columns={columns} page="Solicitações" />
    </Container>
  )
}
