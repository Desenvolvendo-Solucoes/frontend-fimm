'use client'
import React, { useEffect, useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Search from '@/components/Search'
import Filtering from '@/components/Filtering'
import ExportCsv from '@/components/ExportCsv'
import Loading from '@/components/Loading'
import Edit from '@/components/Edit'
import { ValidaToken, getEquipSolicitados } from '@/api'
import { useRouter } from 'next/navigation'

const SolicitacoesEqui: React.FC = () => {
  const { push } = useRouter()

  const [loading, setLoading] = useState(true)
  const action = () => {
    return <Edit screen="solicitacoes" />
  }

  const [rows, setRows] = useState<Data[]>([])

  const columns: ColumnData[] = [
    { Header: 'Matricula', accessor: 'matricula' },
    { Header: 'Solicitante', accessor: 'solicitante' },
    { Header: 'Cidade', accessor: 'cidade', width: 250 },
    { Header: 'Equipamento', accessor: 'equipamento', width: 200 },
    { Header: 'Status', accessor: 'status' },
    {
      Header: 'Rejeição',
      accessor: 'reject',
      width: 250,
      Cell: ({ id, row }) => {
        if (row.reject === undefined) {
          return '-'
        } else {
          return row.reject
        }
      },
    },
    {
      Header: 'Ações',
      accessor: 'action',
      Cell: () => action(),
    },
  ]

  const getRowData = (): Promise<Data[]> => {
    return new Promise((resolve, reject) => {
      getEquipSolicitados().then((_rows) => {
        resolve(_rows)
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
  }, [loading, push])

  return (
    <Container>
      <Sidebar screen="Solicitaç  ões Equipamentos" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length} Solicitações
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} loading={loading} />
            <Filtering screen="solicitacoesEqui" />
            <ExportCsv screen="solicitacoes" />
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

export default SolicitacoesEqui
