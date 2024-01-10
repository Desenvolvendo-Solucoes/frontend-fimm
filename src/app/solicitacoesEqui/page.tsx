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

const SolicitacoesEqui: React.FC = () => {
  const [loading, setLoading] = useState(true)
  const action = () => {
    return <Edit screen="solicitacoes" />
  }
  const initialData = [
    {
      id: '1',
      solicitante: 'João',
      cidade: 'Rio de Janeiro',
      matricula: '001',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
    {
      id: '2',
      solicitante: 'Ana',
      cidade: 'São Paulo',
      matricula: '002',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Aprovado',
      action: action(),
      reject: '-',
    },
    {
      id: '3',
      solicitante: 'Pedro',
      cidade: 'Belo Horizonte',
      matricula: '003',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Pendente',
      action: action(),
      reject: 'quantidade incorreto',
    },
    {
      id: '4',
      solicitante: 'Maria',
      cidade: 'Curitiba',
      matricula: '004',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Rejeitado',
      action: action(),
      reject: 'Modelo errado',
    },
    {
      id: '5',
      solicitante: 'Paulo',
      cidade: 'Porto Alegre',
      matricula: '005',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Aprovado',
      action: action(),
      reject: '-',
    },
    {
      id: '6',
      solicitante: 'Clara',
      cidade: 'Manaus',
      matricula: '006',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
    {
      id: '7',
      solicitante: 'Ricardo',
      cidade: 'Recife',
      matricula: '007',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Pendente',
      action: action(),
      reject: 'Material errado',
    },
    {
      id: '8',
      solicitante: 'Teresa',
      cidade: 'Fortaleza',
      matricula: '008',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
    {
      id: '9',
      solicitante: 'Luiz',
      cidade: 'Goiânia',
      matricula: '009',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Aprovado',
      action: action(),
      reject: '-',
    },
    {
      id: '10',
      solicitante: 'Beatriz',
      cidade: 'Florianópolis',
      matricula: '010',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Rejeitado',
      action: action(),
      reject: 'Cor errada',
    },
    {
      id: '11',
      solicitante: 'Rafael',
      cidade: 'Brasília',
      matricula: '011',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
    {
      id: '12',
      solicitante: 'Camila',
      cidade: 'Salvador',
      matricula: '012',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Aprovado',
      action: action(),
      reject: '-',
    },
    {
      id: '13',
      solicitante: 'Antônio',
      cidade: 'Vitória',
      matricula: '013',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Pendente',
      action: action(),
      reject: 'Filtro errado',
    },
    {
      id: '14',
      solicitante: 'Juliana',
      cidade: 'Natal',
      matricula: '014',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
    {
      id: '15',
      solicitante: 'Marcos',
      cidade: 'Maceió',
      matricula: '015',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Aprovado',
      action: action(),
      reject: '-',
    },
    {
      id: '16',
      solicitante: 'Fernanda',
      cidade: 'Belém',
      matricula: '016',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Rejeitado',
      action: action(),
      reject: 'Material fraco',
    },
    {
      id: '17',
      solicitante: 'Carlos',
      cidade: 'João Pessoa',
      matricula: '017',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
    {
      id: '18',
      solicitante: 'Lúcia',
      cidade: 'Campo Grande',
      matricula: '018',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Aprovado',
      action: action(),
      reject: '-',
    },
    {
      id: '19',
      solicitante: 'Gabriel',
      cidade: 'Aracaju',
      matricula: '019',
      equipamento: 'Smartphone',
      quantidade: '1',
      status: 'Pendente',
      action: action(),
      reject: 'Modelo errado',
    },
    {
      id: '20',
      solicitante: 'Adriana',
      cidade: 'Teresina',
      matricula: '020',
      equipamento: 'Impressora',
      quantidade: '1',
      status: 'Enviado',
      action: action(),
      reject: '-',
    },
  ]
  const [rows, setRows] = useState<Data[]>(initialData)

  const columns: ColumnData[] = [
    { Header: 'Matricula', accessor: 'matricula' },
    { Header: 'Solicitante', accessor: 'solicitante' },
    { Header: 'Cidade', accessor: 'cidade', width: 250 },
    { Header: 'Equipamento', accessor: 'equipamento', width: 200 },
    { Header: 'Quantidade', accessor: 'quantidade', width: 100 },
    { Header: 'Status', accessor: 'status' },
    { Header: 'Rejeição', accessor: 'reject', width: 250 },
    { Header: 'Ações', accessor: 'action' },
  ]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [loading])

  return (
    <Container>
      <Sidebar screen="Solicitações Equipamentos" />
      <div className="p-6">
        <div className="mb-5 ml-4 mr-4  flex w-[calc(100%-2rem)] flex-row items-center justify-between">
          <div className="">
            <span className="text-xl font-bold">
              Total de: {rows.length} Solicitações
            </span>
          </div>
          <div className="flex flex-row gap-4 ">
            <Search fields={rows} setFields={setRows} />
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
