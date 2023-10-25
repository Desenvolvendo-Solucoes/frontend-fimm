import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData } from '@/types'
import Filtering from '@/components/Filtering'
import Search from '@/components/Search'
import NewCollaborator from '@/components/NewCollaborator'

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
      <div>
        <div className="mb-10 ml-9 mt-10 flex w-full  ">
          <div className="w-1/3">
            <span className="text-xl font-bold">Total de: 4 Solicitações</span>
          </div>
          <Search fields={initialData} />
          <Filtering screen="solicitacoes" />
          <NewCollaborator />
        </div>
        <DataGrid data={initialData} columns={columns} page="Funcionarios" />
      </div>
    </Container>
  )
}
