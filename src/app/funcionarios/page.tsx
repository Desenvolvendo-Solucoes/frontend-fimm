'use client'
import React, { useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Filtering from '@/components/Filtering'
import Search from '@/components/Search'
import NewCollaborator from '@/components/NewCollaborator'

export default function Funcionarios() {
  const initialData = [
    { id: '1', name: 'John', age: '30', position: 'Developer' },
    { id: '2', name: 'Jane', age: '40', position: 'Designer' },
    // Adicione mais dados conforme necessário
  ]
  const [rows, setRows] = useState<Data[]>(initialData)
  const columns: ColumnData[] = [
    { Header: 'Nome', accessor: 'name' },
    { Header: 'Idade', accessor: 'age' },
    { Header: 'Position', accessor: 'position' },
  ]

  return (
    <Container>
      <Sidebar screen="Funcionarios" />
      <div>
        <div className="mb-10 ml-9 mt-10 flex w-full  ">
          <div className="w-1/3">
            <span className="text-xl font-bold">Total de: 4 Solicitações</span>
          </div>
          <Search fields={rows} setFields={setRows} />
          <Filtering screen="solicitacoes" />
          <NewCollaborator />
        </div>
        <DataGrid data={initialData} columns={columns} page="Funcionarios" />
      </div>
    </Container>
  )
}
