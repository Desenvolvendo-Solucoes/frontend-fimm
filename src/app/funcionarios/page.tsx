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
      cidade: 'São Paulo',
      matricula: '001002',
      cpf: '123456789-01',
      funcao: 'teste',
      base: 'Enel-SP',
      regiao: 'Sul',
      email: 'teste@example.com',
    },
    {
      id: '2',
      solicitante: 'João',
      cidade: 'São Paulo',
      matricula: '001002',
      cpf: '123456789-01',
      funcao: 'teste',
      base: 'Enel-SP',
      regiao: 'Sul',
      email: 'teste@example.com',
    },
    {
      id: '3',
      solicitante: 'João',
      cidade: 'São Paulo',
      matricula: '001002',
      cpf: '123456789-01',
      funcao: 'teste',
      base: 'Enel-SP',
      regiao: 'Sul',
      email: 'teste@example.com',
    },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)
  const columns: ColumnData[] = [
    { Header: 'Matricula', accessor: 'matricula', width: 100 },
    { Header: 'Solicitante', accessor: 'solicitante' },
    { Header: 'CPF', accessor: 'cpf', width: 250 },
    { Header: 'Função', accessor: 'funcao' },
    { Header: 'Base', accessor: 'base' },
    { Header: 'Região', accessor: 'regiao' },
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Email', accessor: 'email', width: 250 },
    { Header: 'Ações', accessor: 'action' },
  ]

  return (
    <Container>
      <Sidebar screen="Funcionarios" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-1rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length} Solicitações
            </span>
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
