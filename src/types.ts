import React from 'react'

export type DataType = {
  solicitante: string
  avatar: string
  matricula: string
  epi: string
  dataSolicitada: string
  quantidade: string
  imagem: string
  tamanho: string
  status: string
  nome: string
  cpf: string
  funcao: string
  base: string
  regiao: string
  email: string
  [key: string]: string
}

export type Data = {
  id: string
  [key: string]: string
}

export type ColumnData = {
  Header: string
  accessor: string
  Cell?: React.FC<{
    value: string
    row: Data
  }>
}

export type ResizableColumnProps = {
  name: string
}
