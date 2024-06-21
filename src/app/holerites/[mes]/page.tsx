'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import HoleriteFilter from '@/components/HoleriteLayout/HoleriteFilter'
import { ArrowLeft, Download, FileText } from 'react-feather'
import Loading from '@/components/Loading'
import { ColumnData, Holerite } from '@/types'
import DatagridHolerites from '@/components/DatagridHolerite'
import { getHoleritesMes, ValidaToken } from '@/api'

export default function Page({ params }: { params: { mes: string } }) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { push } = useRouter()
  const mesano = window.location.pathname.split('/')[2]
  const [initialData, setInitialData] = useState<Holerite[]>([])
  const searchParams = useSearchParams();
  const contrato = searchParams.get('contrato')

  const selectMes = (mes: string) => {
    switch (mes) {
      case '01':
        return 'Janeiro'
      case '02':
        return 'Fevereiro'
      case '03':
        return 'Março'
      case '04':
        return 'Abril'
      case '05':
        return 'Maio'
      case '06':
        return 'Junho'
      case '07':
        return 'Julho'
      case '08':
        return 'Agosto'
      case '09':
        return 'Setembro'
      case '10':
        return 'Outubro'
      case '11':
        return 'Novembro'
      case '12':
        return 'Dezembro'
      default:
        break
    }
  }

  const columns: ColumnData[] = [
    {
      Header: 'Holerites disponiveis',
      accessor: 'holerite',
      width: 280,
      Cell: () => {
        return (
          <div className="flex h-full w-full flex-row gap-2 pl-2 text-left">
            <FileText size={24} color="#2196F3" />
            <div>
              Holerite - {selectMes(mesano.split('-')[0])}{' '}
              {mesano.split('-')[1]}
            </div>
          </div>
        )
      },
    },
    { Header: 'Matricula', accessor: 'matricula', width: 150 },
    {
      Header: 'Nome',
      accessor: 'nome',
      width: 500,
      Cell: (row, value) => {
        return (
          <div className=" ml-2 mr-2 flex w-full items-center overflow-hidden whitespace-nowrap text-start">
            <td className=" w-11/12 overflow-hidden truncate whitespace-nowrap ">
              {row.row.nome}
            </td>
          </div>
        )
      },
    },
    {
      Header: 'Atualizado em',
      accessor: 'atualizado',
      width: 450,
      Cell: (row, value) => {
        console.log(value)
        const tamanhoMes = row.row.atualizado.toString().split('-')[0]
        const mes = tamanhoMes.length == 1 ? `0${tamanhoMes}` : tamanhoMes
        const ano = row.row.atualizado.toString().split('-')[1]

        return (
          <div className="flex h-full w-full cursor-pointer flex-row justify-between">
            {mes}/{ano}
            <a
              href={`${row.row.holerite}`}
              target="_blank"
              className="flex h-7 w-24 flex-row items-center justify-center gap-2 rounded bg-[#1E1685] text-[8px] text-[white] hover:bg-[#221f51]"
              rel="noreferrer"
            >
              <Download color="white" size={10} />
              Download
            </a>
          </div>
        )
      },
    },
  ]

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex h-[calc(100%-10rem)] flex-grow items-center justify-center">
          <Loading />
        </div>
      )
    }

    if (!loading) {
      return (
        <div className="flex h-[calc(100%-10rem)]">
          <DatagridHolerites columns={columns} data={initialData} />
        </div>
      )
    }
  }

  const getHolerites = () => {
    getHoleritesMes(params.mes, contrato ? contrato : '').then((response) => {
      setInitialData(response)
    })
  }

  useEffect(() => {
    if (!loading) {
      getHolerites()
      ValidaToken().catch(() => {
        push('/')
      })
    }
  }, [loading, push])

  return (
    <div className="h-full w-full bg-[#F9FBFD]/[0.30] p-8">
      {/* <HoleriteMenu setPage={setPage} page={page} /> */}
      <h1 className="mb-4 text-[20px] font-bold">Holerites - {params.mes} - {contrato} </h1>
      <HoleriteFilter type="search" />
      <p
        className="m-0 mb-6 mt-2 flex w-auto flex-1 cursor-pointer items-center gap-2 p-0 text-base font-bold text-[#1E1685]"
        onClick={(e) => {
          e.preventDefault()
          router.push('/holerites')
        }}
      >
        <ArrowLeft size={20} /> Voltar
      </p>
      {renderContent()}
    </div>

  )
}
