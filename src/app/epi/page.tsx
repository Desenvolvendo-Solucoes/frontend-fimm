'use client'
import React, { useEffect, useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Search from '@/components/Search'
import Filtering from '@/components/Filtering'
import Loading from '@/components/Loading'
import NewEpi from '@/components/NewEpi'
import Edit from '@/components/Edit'
import * as Avatar from '@radix-ui/react-avatar'
import { ValidaToken, getEpiCadastrado } from '@/api'
import { useRouter } from 'next/navigation'

const Epi: React.FC = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(0)

  const [rows, setRows] = useState<Data[]>([])

  const columns: ColumnData[] = [
    {
      Header: 'EPI',
      accessor: 'epi',
      Cell: ({ id, row }) => {
        return (
          <Avatar.Root className="flex h-full  w-full flex-row items-center justify-start gap-2">
            <Avatar.Image
              className="h-8 w-8 rounded-full"
              src={row.imagem.toString()}
            />
            {row.epi}
          </Avatar.Root>
        )
      },
    },
    { Header: 'Dias', accessor: 'dias', width: 100 },
    { Header: 'Marca', accessor: 'marca' },
    { Header: 'Estoque', accessor: 'estoque', width: 100 },
    {
      Header: 'Ações',
      accessor: 'action',
      Cell: ({ id, row }) => {
        return <Edit screen="epi" refresh={setRefresh} id={row.id} row={row} />
      },
    },
  ]

  useEffect(() => {
    ValidaToken()
      .then(() => {
        getEpiCadastrado().then((Rows) => {
          setRows(Rows)
          setLoading(false)
        })
      })
      .catch(() => {
        push('/')
      })
  }, [loading, refresh])

  return (
    <Container>
      <Sidebar screen="Epi" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length <= 0 ? 0 : rows.length} EPI
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} loading={loading} />
            <Filtering screen="epi" />
            <NewEpi refresh={setRefresh} />
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

export default Epi
