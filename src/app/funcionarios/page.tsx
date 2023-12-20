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
    {
      id: '1',
      solicitante: 'João',
      cidade: 'Rio de Janeiro',
      matricula: '001',
      status: 'Enviado',
    },
    {
      id: '2',
      solicitante: 'Ana',
      cidade: 'São Paulo',
      matricula: '002',
      status: 'Aprovado',
    },
    {
      id: '3',
      solicitante: 'Pedro',
      cidade: 'Belo Horizonte',
      matricula: '003',
      status: 'Pendente',
    },
    {
      id: '4',
      solicitante: 'Maria',
      cidade: 'Curitiba',
      matricula: '004',
      status: 'Rejeitado',
    },
    {
      id: '5',
      solicitante: 'Paulo',
      cidade: 'Porto Alegre',
      matricula: '005',
      status: 'Aprovado',
    },
    {
      id: '6',
      solicitante: 'Clara',
      cidade: 'Manaus',
      matricula: '006',
      status: 'Enviado',
    },
    {
      id: '7',
      solicitante: 'Ricardo',
      cidade: 'Recife',
      matricula: '007',
      status: 'Pendente',
    },
    {
      id: '8',
      solicitante: 'Teresa',
      cidade: 'Fortaleza',
      matricula: '008',
      status: 'Enviado',
    },
    {
      id: '9',
      solicitante: 'Luiz',
      cidade: 'Goiânia',
      matricula: '009',
      status: 'Aprovado',
    },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)
  const columns: ColumnData[] = [
    { Header: 'Solicitante', accessor: 'solicitante', width: 250 },
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Matricula', accessor: 'matricula', width: 100 },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Ações', accessor: 'action' },
  ]

  return (
    <Container>
      <Sidebar screen="Funcionarios" />
      <div className="p-6">
        <div className="ml-4 mr-4  flex w-[calc(100%-1rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">Total de: 4 Solicitações</span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} />
            <Filtering screen="funcionarios" />
            <NewCollaborator />
          </div>
        </div>
        <div className="h-[calc(100%-3.75rem)] w-full">
          <DataGrid data={rows} columns={columns} />
        </div>
      </div>
    </Container>
  )
}
