import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'

export default function solicitacoes() {
  const data = [
    {
      solicitante: 'Mohammed',
      avatar: 'https://img.icons8.com/color/600w/000000/avatar.png',
      matricula: '102030',
      epi: 'Óculos de segurança',
      dataSolicitada: '12/07/1998',
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
    },
    {
      solicitante: 'John Doe',
      avatar: 'https://img.icons8.com/color/600w/000000/avatar.png',
      matricula: '12345',
      epi: 'Camiseta ML',
      dataSolicitada: '12/07/1998',
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Pendente',
    },
    {
      solicitante: 'Gustavo Aires',
      avatar: 'https://img.icons8.com/color/600w/000000/avatar.png',
      matricula: '120798',
      epi: 'Botina',
      dataSolicitada: '12/07/1998',
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Pendente',
    },
    {
      solicitante: 'Ricardo Dias',
      avatar: '',
      matricula: '121212',
      epi: 'Óculos de segurança',
      dataSolicitada: '12/07/1998',
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Pendente',
    },
    // Adicione mais itens de dados conforme necessário
  ]

  return (
    <div className="grid h-screen w-screen grid-cols-[18%,82%] grid-rows-1 gap-0 overflow-x-hidden">
      <Sidebar screen="Solicitações" />
      <DataGrid
        screen="Solicitações"
        data={data}
        column={[
          'solicitante',
          'matricula',
          'epi',
          'dataSolicitada',
          'quantidade',
          'imagem',
          'tamanho',
          'status',
          'Ações',
        ]}
      />
    </div>
  )
}
