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

const Solicitacoes: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const initialData = [
    {
      id: '1',
      solicitante: 'João',
      cidade: 'Rio de Janeiro',
      matricula: '001',
      epi: 'Capacete',
      tamanho: 'M',
      status: 'Enviado',
      reject: '',
    },
    {
      id: '2',
      solicitante: 'Ana',
      cidade: 'São Paulo',
      matricula: '002',
      epi: 'Luvas',
      tamanho: 'L',
      status: 'Aprovado',
      reject: '',
    },
    {
      id: '3',
      solicitante: 'Pedro',
      cidade: 'Belo Horizonte',
      matricula: '003',
      epi: 'Óculos',
      tamanho: 'G',
      status: 'Pendente',
      reject: 'Tamanho incorreto',
    },
    {
      id: '4',
      solicitante: 'Maria',
      cidade: 'Curitiba',
      matricula: '004',
      epi: 'Botas',
      tamanho: '40',
      status: 'Rejeitado',
      reject: 'Modelo errado',
    },
    {
      id: '5',
      solicitante: 'Paulo',
      cidade: 'Porto Alegre',
      matricula: '005',
      epi: 'Máscara',
      tamanho: 'M',
      status: 'Aprovado',
      reject: '',
    },
    {
      id: '6',
      solicitante: 'Clara',
      cidade: 'Manaus',
      matricula: '006',
      epi: 'Protetor Auricular',
      tamanho: 'Único',
      status: 'Enviado',
      reject: '',
    },
    {
      id: '7',
      solicitante: 'Ricardo',
      cidade: 'Recife',
      matricula: '007',
      epi: 'Capa',
      tamanho: 'G',
      status: 'Pendente',
      reject: 'Material errado',
    },
    {
      id: '8',
      solicitante: 'Teresa',
      cidade: 'Fortaleza',
      matricula: '008',
      epi: 'Jaleco',
      tamanho: 'P',
      status: 'Enviado',
      reject: '',
    },
    {
      id: '9',
      solicitante: 'Luiz',
      cidade: 'Goiânia',
      matricula: '009',
      epi: 'Luvas',
      tamanho: 'M',
      status: 'Aprovado',
      reject: '',
    },
    {
      id: '10',
      solicitante: 'Beatriz',
      cidade: 'Florianópolis',
      matricula: '010',
      epi: 'Capacete',
      tamanho: 'G',
      status: 'Rejeitado',
      reject: 'Cor errada',
    },
    {
      id: '11',
      solicitante: 'Rafael',
      cidade: 'Brasília',
      matricula: '011',
      epi: 'Botas',
      tamanho: '42',
      status: 'Enviado',
      reject: '',
    },
    {
      id: '12',
      solicitante: 'Camila',
      cidade: 'Salvador',
      matricula: '012',
      epi: 'Óculos',
      tamanho: 'M',
      status: 'Aprovado',
      reject: '',
    },
    {
      id: '13',
      solicitante: 'Antônio',
      cidade: 'Vitória',
      matricula: '013',
      epi: 'Máscara',
      tamanho: 'G',
      status: 'Pendente',
      reject: 'Filtro errado',
    },
    {
      id: '14',
      solicitante: 'Juliana',
      cidade: 'Natal',
      matricula: '014',
      epi: 'Protetor Auricular',
      tamanho: 'Único',
      status: 'Enviado',
      reject: '',
    },
    {
      id: '15',
      solicitante: 'Marcos',
      cidade: 'Maceió',
      matricula: '015',
      epi: 'Capa',
      tamanho: 'M',
      status: 'Aprovado',
      reject: '',
    },
    {
      id: '16',
      solicitante: 'Fernanda',
      cidade: 'Belém',
      matricula: '016',
      epi: 'Jaleco',
      tamanho: 'G',
      status: 'Rejeitado',
      reject: 'Material fraco',
    },
    {
      id: '17',
      solicitante: 'Carlos',
      cidade: 'João Pessoa',
      matricula: '017',
      epi: 'Luvas',
      tamanho: 'P',
      status: 'Enviado',
      reject: '',
    },
    {
      id: '18',
      solicitante: 'Lúcia',
      cidade: 'Campo Grande',
      matricula: '018',
      epi: 'Capacete',
      tamanho: 'P',
      status: 'Aprovado',
      reject: '',
    },
    {
      id: '19',
      solicitante: 'Gabriel',
      cidade: 'Aracaju',
      matricula: '019',
      epi: 'Botas',
      tamanho: '41',
      status: 'Pendente',
      reject: 'Modelo errado',
    },
    {
      id: '20',
      solicitante: 'Adriana',
      cidade: 'Teresina',
      matricula: '020',
      epi: 'Óculos',
      tamanho: 'P',
      status: 'Enviado',
      reject: '',
    },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)

  const columns: ColumnData[] = [
    { Header: 'Solicitante', accessor: 'solicitante', width: 250 },
    { Header: 'Cidade', accessor: 'cidade' },
    { Header: 'Matricula', accessor: 'matricula', width: 100 },
    { Header: 'Epi', accessor: 'epi' },
    { Header: 'Tamanho', accessor: 'tamanho', width: 100 },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Ações', accessor: 'action' },
    { Header: 'Rejeição', accessor: 'reject' },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  return (
    <Container>
      <Sidebar screen="Solicitações" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length} Solicitações
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} />
            <Filtering screen="solicitacoes" />
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

export default Solicitacoes
