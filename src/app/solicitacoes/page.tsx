'use client'
import React, { useEffect, useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Search from '@/components/Search'
import Filtering from '@/components/Filtering'
import ExportCsv from '@/components/ExportCsv'
// import Loading from '@/components/Loading'
import Edit from '@/components/Edit'
import { ValidaToken, getEpiSolicitados } from '@/api'
import { useRouter } from 'next/navigation'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Solicitacoes: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const { push } = useRouter()

  const [rows, setRows] = useState<Data[]>([])

  const columns: ColumnData[] = [
    { Header: 'Matricula', accessor: 'matricula', width: 100 },
    { Header: 'Solicitante', accessor: 'solicitante', width: 250 },
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Epi', accessor: 'epi' },
    { Header: 'Tamanho', accessor: 'tamanho', width: 100 },
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
      Cell: ({ id, row }) => {
        return <Edit screen="solicitacoes" />
      },
    },
  ]

  const getRowData = (): Promise<Data[]> => {
    return new Promise((resolve, reject) => {
      getEpiSolicitados().then((_rows) => {
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
  }, [loading])

  return (
    <Container>
      <Sidebar screen="Solicitações" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="w-80 ">
            <span className=" text-xl font-bold">
              {loading ? (
                <Skeleton className="h-10" />
              ) : (
                `Total de: ${rows.length} Solicitações`
              )}
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            {loading ? (
              <Skeleton />
            ) : (
              <Search fields={rows} setFields={setRows} />
            )}
            {loading ? <Skeleton /> : <Filtering screen="solicitacoes" />}
            {loading ? <Skeleton /> : <ExportCsv screen="solicitacoes" />}
          </div>
        </div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`h-[calc(100%-3.75rem)] w-full }`}
        >
          {loading ? (
            <>
              <Skeleton className="flex h-8" />
              <Skeleton className="mt-2 flex h-[calc(100%-4rem)]" />
            </>
          ) : (
            <DataGrid data={rows} columns={columns} />
          )}
        </div>
      </div>
    </Container>
  )
}

export default Solicitacoes
