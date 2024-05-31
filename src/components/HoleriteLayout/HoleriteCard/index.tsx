import Calendar from '@/components/Icons/Calendar'
import React, { useEffect, useState } from 'react'

interface Props {
  data: string,
}

const HoleriteCard: React.FC<Props> = ({ data }: Props) => {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agostp",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [mes, setMes] = useState('')
  const [dataFormatada, setDataFormatada] = useState('')
  const [_mes, _setMes] = useState('')
  const [_ano, _setAno] = useState('')

  const formataData = () => {
    var _data = data.split('-')
    var _mes = _data[0]
    var _ano = _data[1]

    setDataFormatada(`${_mes}/${_ano}`)
    setMes(meses[parseInt(_mes) - 1])
  }

  useEffect(() => {
    formataData()
  }, [])

  return (
    <a href={`/holerites/${data}`}>
      <div
        className="flex h-24 w-56 cursor-pointer flex-row items-center justify-center gap-3 rounded-lg border bg-[white] shadow-md duration-75 hover:bg-[#ececec]"
        onClick={() => {
          console.log('clicou no holeirte')
        }}
      >
        <Calendar />
        <div className="flex flex-col items-center justify-center">
          <p className="text-[30px] font-bold">{dataFormatada}</p>
          <p>{mes}</p>
        </div>
      </div>
    </a>
  )
}

export default HoleriteCard
