import React from 'react'
import DataGrid from '../components/Datagrid'

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
    <div>
      <DataGrid data={data} />
    </div>
  )
}
