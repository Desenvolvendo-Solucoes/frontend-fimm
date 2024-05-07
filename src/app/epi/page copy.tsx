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
import { BsPencilFill, BsX } from 'react-icons/bs'

const Epi: React.FC = () => {
  const { push } = useRouter()
  const [loading, setLoading] = useState(true)
  const [rowEdit, setRowEdit] = useState(false)
  const [rowData, setRowData] = useState<{ row: Data, id: string }>()

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
        return (
          <div className=" ">
            {
              !rowEdit ? (
                <button onClick={() => {
                  setRowData({ row, id })
                  setRowEdit(!rowEdit)
                }}>
                  <BsPencilFill />
                </button>
              ) : row === rowData?.row ? (
                <button onClick={() => {
                  setRowEdit(!rowEdit)
                }}>
                  <BsX />
                </button>
              ) : (<BsPencilFill />)
            }
          </div>
        )
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
  }, [loading])

  const renderEditForm = () => {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className='flex flex-col gap-9'
      >
        <img src={rowData!.row?.imagem.toString()} className='h-60 w-96' />
        <div className='flex flex-row gap-2 w-full'>
          <div className='flex flex-col w-1/3'>
            <label>Nome</label>
            <input className='h-12  rounded border-2 border-black/20 pl-4'></input>
          </div>

          <div className='flex flex-col w-1/3'>
            <label>Dias Para Expirar</label>
            <input type='number' className='h-12  rounded border-2 border-black/20 pl-4'></input>
          </div>
        </div>

        <div className='flex flex-row gap-2 w-full'>
          <div className='flex flex-col w-1/3'>
            <label>Marca</label>
            <input className='h-12  rounded border-2 border-black/20 pl-4'></input>
          </div>

          <div className='flex flex-col w-1/3'>
            <label>Estoque</label>
            <input type='number' className='h-12  rounded border-2 border-black/20 pl-4'></input>
          </div>
        </div>

        <div></div>

      </form>
    )
  }

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
            <NewEpi />
          </div>
        </div>
        <div
          // eslint-disable-next-line prettier/prettier
          className={`h-[calc(100%-3.75rem)] w-full ${loading ? 'flex items-center justify-center' : ''}`}
        >
          {loading ? <Loading /> : (
            <div className='grid grid-cols-2 h-full '>
              <DataGrid data={rows} columns={columns} />
              <div className=' h-full'>
                {rowEdit ? (renderEditForm()) : (
                  <div className='flex flex-col gap-2 justify-center items-center h-full'>
                    <img src='/Holerites_Processando.svg' height={350} width={350} />
                    <label>Selecione um Epi</label>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Epi
