'use client'
import React, { useEffect, useState } from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import { ColumnData, Data } from '@/types'
import Search from '@/components/Search'
import Filtering from '@/components/Filtering'
import NewEquipamento from '@/components/NewEquipamento'
import Loading from '@/components/Loading'
import Edit from '@/components/Edit'

const Equipamentos: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const initialData = [
    {
      id: '1',
      equipamento: 'Impressora',
      dias: '001',
      quantidade: '10',
    },
    {
      id: '2',
      equipamento: 'SmartPhone',
      dias: '001',
      quantidade: '10',
    },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)

  const columns: ColumnData[] = [
    { Header: 'Equipamento', accessor: 'equipamento' },
    { Header: 'Dias', accessor: 'dias', width: 100 },
    { Header: 'Quantidade', accessor: 'quantidade', width: 100 },
    {
      Header: 'Ações',
      accessor: 'action',
      Cell: ({ id, row }) => {
        return <Edit screen="equipamento" />
      },
    },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  return (
    <Container>
      <Sidebar screen="Equipamentos" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length <= 0 ? 0 : rows.length} Equipamentos
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} loading={loading} />
            <Filtering screen="equipamento" />
            <NewEquipamento />
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

export default Equipamentos
