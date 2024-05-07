'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import HoleriteFilter from '@/components/HoleriteLayout/HoleriteFilter'
import HoleriteMenu from '@/components/HoleriteLayout/HoleriteMenu'
import { ArrowLeft, Download, FileText } from 'react-feather'
import Loading from '@/components/Loading'
import { ColumnData } from '@/types'
import DatagridHolerites from '@/components/DatagridHolerite'

export default function Page({ params }: { params: { mes: string } }) {
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState<string>('holerites')
  const router = useRouter()
  const mesano = window.location.pathname.split('/')[2]
  const dataAtual = new Date()

  const initialData = [
    {
      id: '1',
      holerites: 'teste',
      matricula: '123456',
      nome: 'Gustavo Aires Cavalcanti Moreira',
      atualizado: [
        dataAtual.getTime(),
        'https://firebasestorage.googleapis.com/v0/b/fimmbrasil-e512a.appspot.com/o/Holerites%2F9-2023%2F102665.jpg?alt=media&token=e332c2a8-8873-453c-88c3-83a7cd3fa6bd&_gl=1*7biz8i*_ga*NTYwNjQyMjcwLjE2OTUxNTQyNjA.*_ga_CW55HF8NVT*MTY5NjU1MTM0OC40LjEuMTY5NjU1MTM2OS4zOS4wLjA.',
      ],
    },
    {
      id: '2',
      holerites: 'teste',
      matricula: '123456',
      nome: 'Gustavo Aires Cavalcanti Moreira',
      atualizado: [
        dataAtual.getTime(),
        'https://firebasestorage.googleapis.com/v0/b/fimmbrasil-e512a.appspot.com/o/Holerites%2F9-2023%2F102665.jpg?alt=media&token=e332c2a8-8873-453c-88c3-83a7cd3fa6bd&_gl=1*7biz8i*_ga*NTYwNjQyMjcwLjE2OTUxNTQyNjA.*_ga_CW55HF8NVT*MTY5NjU1MTM0OC40LjEuMTY5NjU1MTM2OS4zOS4wLjA.',
      ],
    },
  ]

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
      accessor: 'holerites',
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
    { Header: 'Nome', accessor: 'nome', width: 175 },
    {
      Header: 'Atualizado em',
      accessor: 'atualizado',
      width: 450,
      Cell: (row, value) => {
        const mes = dataAtual.getMonth() + 1
        const ano = dataAtual.getFullYear()
        const dia = dataAtual.getDate()
        const horas = dataAtual.getHours()
        const minutos = dataAtual.getMinutes()
        const segundos = dataAtual.getSeconds()

        return (
          <div className="flex h-full w-full flex-row justify-between">
            {dia}/{mes}/{ano} às {horas}:{minutos}:{segundos}
            <a
              href={row.row.value.toString()}
              target="_blank"
              className="flex h-7 w-24 flex-row items-center justify-center gap-2 rounded bg-[#1E1685] text-[8px] text-[white] hover:bg-[#221f51]"
              rel="noreferrer"
            >
              <Download color="white" size={10} />
              Download
            </a>
            {/* <div>{row.value}</div> */}
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [loading])

  return (
    <Container>
      <Sidebar screen="Holerites" />
      <div className="h-full w-full bg-[#F9FBFD]/[0.30] p-8">
        <HoleriteMenu setPage={setPage} page={page} />
        <h1 className="mb-4 text-[20px] font-bold">Holerites - 2023</h1>
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
    </Container>
  )
}
