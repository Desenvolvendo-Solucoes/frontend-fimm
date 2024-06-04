import Calendar from '@/components/Icons/Calendar'
import React, { useEffect, useState, useRef } from 'react'
import Loading from '@/components/Loading'

interface Props {
  data: string
  status: 'loading' | 'finised'
}

const HoleriteCard: React.FC<Props> = ({ data, status }: Props) => {
  const meses = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agostp',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ]

  const [mes, setMes] = useState('')
  const [dataFormatada, setDataFormatada] = useState('')
  const [_mes, _setMes] = useState('')
  const [_ano, _setAno] = useState('')
  const linkRef = useRef<HTMLAnchorElement | null>(null)

  const formataData = () => {
    const _data = data.split('-')
    const _mes = _data[0]
    const _ano = _data[1]

    setDataFormatada(`${_mes}/${_ano}`)
    setMes(meses[parseInt(_mes) - 1])
  }

  const redirect = async () => {
    if (linkRef.current == null) return
    if (status === 'finised') {
      linkRef.current.click()
    }
  }

  useEffect(() => {
    formataData()
  }, [])

  return (
    <div
      className="flex h-24 w-56 cursor-pointer flex-row items-center justify-center gap-3 rounded-lg border bg-[white] shadow-md duration-75 hover:bg-[#ececec]"
      onClick={redirect}
    >
      {status === 'loading' ? <Loading /> : <Calendar />}
      <div className="flex flex-col items-center justify-center">
        <p className="text-[30px] font-bold">{dataFormatada}</p>
        <p>{mes}</p>
      </div>
      <a href={`/holerites/${data}`} ref={linkRef} hidden />
    </div>
  )
}

export default HoleriteCard
