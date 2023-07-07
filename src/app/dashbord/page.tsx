import React from 'react'
import DataGrid from '../components/Datagrid'

export default function Teste() {
  const data = [
    {
      solicitante: 'Mohammed dos Reis menezes ',
      avatar: '',
      matricula: 12345,
      epi: 'Óculos de segurança',
      dataSolicitada: new Date(),
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
      acoes: <button>Editar</button>,
    },
    {
      solicitante: 'Gustavo Aires',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5iayJtE2G-sH3Ss7m0rq7fuACxniU3J1ckRjUlhvZMpGyQqgpmzuAEe0VE30etckgig&usqp=CAU',
      matricula: 12345,
      epi: 'Óculos de segurança',
      dataSolicitada: new Date(),
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
      acoes: <button>Editar</button>,
    },
    {
      solicitante: 'Ricardo Dias',
      avatar: '',
      matricula: 12345,
      epi: 'Óculos de segurança',
      dataSolicitada: new Date(),
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
      acoes: <button>Editar</button>,
    },
    {
      solicitante: 'Gabriel',
      avatar:
        'https://w7.pngwing.com/pngs/640/691/png-transparent-avatar-boy-character-man-user-avatar-vol-9-icon.png',
      matricula: 12345,
      epi: 'Óculos de segurança',
      dataSolicitada: new Date(),
      quantidade: '1 unidade',
      imagem: 'caminho/para/imagem.jpg',
      tamanho: 'M',
      status: 'Aprovado',
      acoes: <button>Editar</button>,
    },

    // Adicione mais itens de dados conforme necessário
  ]

  return (
    <div>
      <DataGrid data={data} />
    </div>
  )
}
