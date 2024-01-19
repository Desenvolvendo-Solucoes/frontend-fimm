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
  [key: string]: string | (string | number)[] | React.JSX.Element
}

export type ColumnData = {
  Header: string
  accessor: string
  Cell?: React.FC<{
    id: string
    row: Data
  }>
  width?: number
}

export type ResizableColumnProps = {
  name: string
}

export type TamanhosEpi = {
  value: string
  label: string
}[]

export type RequestCreateEpi = {
  nome: string
  imagem: string
  marca: string
  estoque: string
  dias: string
  tamanhos: TamanhosEpi
}

export type CUser = {
  nome: string
  matricula: string
  cpf: string
  cidade: string
  regiao: string
  funcao: string
  base: string
}

export type ScreeOptions =
  | 'solicitacoes'
  | 'funcionarios'
  | 'epi'
  | 'equipamento'
  | 'solicitacoesEqui'
