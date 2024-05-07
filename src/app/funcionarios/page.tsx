'use client'
import React, { useEffect, useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Filtering from '@/components/Filtering'
import Search from '@/components/Search'
import NewFuncionario from '@/components/NewFuncionario'
import Edit from '@/components/Edit'
import { ValidaToken, getAllUsers } from '@/api'
import { useRouter } from 'next/navigation'
import 'react-loading-skeleton/dist/skeleton.css'
import Loading from '@/components/Loading'


export default function Funcionarios() {
  const { push } = useRouter()

  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(0)

  const [rows, setRows] = useState<Data[]>([])

  const columns: ColumnData[] = [
    { Header: 'Matricula', accessor: 'matricula', width: 120 },
    { Header: 'Funcionário', accessor: 'nome', width: 250 },
    { Header: 'CPF', accessor: 'cpf', width: 200 },
    { Header: 'Função', accessor: 'funcao', width: 200 },
    { Header: 'Região', accessor: 'regiao' },
    { Header: 'Cidade', accessor: 'cidade' },
    {
      Header: 'Email', accessor: 'email', width: 250, Cell: ({ id, row }) => {
        if (!row.email) {
          return (<div>-</div>)
        }
        else {
          return (<div>{row.email}</div>)
        }
      }
    },
    {
      Header: 'Ações',
      accessor: 'action',
      Cell: ({ id, row }) => {
        return <Edit screen="funcionarios" row={row} id={row.id} refresh={setRefresh} />
      },
    },
  ]

  const getRowData = (): Promise<Data[]> => {
    return new Promise((resolve, reject) => {
      getAllUsers().then((response) => {
        resolve(response)
      })
    })
  }

  useEffect(() => {
    ValidaToken()
      .then(() => {
        getRowData().then((rowData) => {
          setRows(rowData)
          setLoading(false)
        })
      })
      .catch(() => {
        push('/')
      })
  }, [loading, push, refresh])

  return (
    <Container>
      <Sidebar screen="Funcionarios" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-1rem)] flex-row items-center justify-between">
          <div className="w-80">
            <span className="text-xl font-bold">
              Total de: {rows.length <= 0 ? 0 : rows.length} Solicitações
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} loading={loading} />
            <Filtering screen="funcionarios" />
            <NewFuncionario refresh={setRefresh} />
          </div>
        </div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`h-[calc(100%-3.75rem)] w-full ${loading ? 'flex items-center justify-center' : ''}`}
        >
          {loading ? <Loading /> : <DataGrid data={rows} columns={columns} />}
        </div>
      </div>
    </Container>
  )
}
