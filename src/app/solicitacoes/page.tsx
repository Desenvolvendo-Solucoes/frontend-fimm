import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'

export default function Teste() {
  const data = [
    {
      solicitante: 'John Doe',
      avatar: 'https://img.icons8.com/color/600w/000000/avatar.png',
      matricula: '12345',
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
      epi: 'Óculos de segurança',
      dataSolicitada: '12/07/1998',
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
    },
    {
      solicitante: 'John Doe',
      avatar: '',
      matricula: '12345',
      epi: 'Óculos de segurança',
      dataSolicitada: '12/07/1998',
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
    },
    // Adicione mais itens de dados conforme necessário
  ]

  return (
    <div className="grid h-screen w-screen grid-cols-[18%,82%] grid-rows-1 gap-0">
      <Sidebar />
      <div className="grid h-full w-full grid-cols-1 grid-rows-[120px,auto]">
        <div className="w-full bg-black" />
        <DataGrid data={data} />
      </div>
    </div>
  )
}
