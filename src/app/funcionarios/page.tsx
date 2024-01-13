'use client'
import React, { useEffect, useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Filtering from '@/components/Filtering'
import Search from '@/components/Search'
import NewFuncionario from '@/components/NewFuncionario'
import Loading from '@/components/Loading'
import Edit from '@/components/Edit'

export default function Funcionarios() {
  const [loading, setLoading] = useState(true)
  const action = () => {
    return <Edit screen="funcionarios" />
  }
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
      action: action(),
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
      action: action(),
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
      action: action(),
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
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])
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
            <NewFuncionario />
          </div>
        </div>
        <div
          className={`h-[calc(100%-3.75rem)] w-full ${
            loading ? 'flex items-center justify-center' : ''
          }`}
        >
          {loading ? <Loading /> : <DataGrid data={rows} columns={columns} />}
        </div>
      </div>
    </Container>
  )
}
