import React from 'react'
import DataGrid from '@/components/Datagrid'
import Sidebar from '@/components/Sidebar'

export default function funcionarios() {
  const data = [
    {
      matricula: '102030',
      nome: 'Mohammed R',
      cpf: '39301179830',
      funcao: 'Dev',
      base: 'Grajaú',
      regiao: 'São paulo',
      email: 'Mohammedreis2015@gmail.com',
    },
    {
      matricula: 'CPF',
      nome: 'Mohammed R',
      cpf: 'Nome',
      funcao: 'Função',
      base: 'Base',
      regiao: 'REGIAO',
      email: 'E-MAIL',
    },
    {
      matricula: 'CPF',
      nome: 'Mohammed R',
      cpf: 'Nome',
      funcao: 'Função',
      base: 'Base',
      regiao: 'REGIAO',
      email: 'E-MAIL',
    },
    {
      matricula: 'CPF',
      nome: 'Mohammed R',
      cpf: 'Nome',
      funcao: 'Função',
      base: 'Base',
      regiao: 'REGIAO',
      email: 'E-MAIL',
    },
    // Adicione mais itens de dados conforme necessário
  ]
  return (
    <div className="grid h-screen w-screen grid-cols-[18%,82%] grid-rows-1 gap-0 overflow-x-hidden">
      <Sidebar screen="Funcionarios" />
      <DataGrid
        screen="Funcionarios"
        data={data}
        column={[
          'Matricula',
          'Nome',
          'CPF',
          'Função',
          'Base',
          'REGIAO',
          'E-MAIL',
        ]}
      />
    </div>
  )
}
