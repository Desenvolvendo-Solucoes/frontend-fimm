'use client'
import React from 'react'
import IconsView from './LayoutView/IconsView'
import { RefreshCcw, Code } from 'react-feather'
import { setCookie } from 'cookies-next'

type Props = {
  type: 'filter' | 'search',
  contrato: string,
  setContrato: React.Dispatch<React.SetStateAction<string>>
  setRefresh: React.Dispatch<React.SetStateAction<number>>
  refresh: number
  ano: string
  setAno: React.Dispatch<React.SetStateAction<string>>
  anos: string[]
}

const contratos = [
  {
    value: "COPASA INTERIOR LESTE",
    label: "COPASA INTERIOR LESTE",
  },
  {
    value: "COPASA INTERIOR OESTE",
    label: "COPASA INTERIOR OESTE",
  },
  {
    value: "COPASA INTERIOR NORTE",
    label: "COPASA INTERIOR NORTE",
  },
  {
    value: "COPASA INTERIOR SUL",
    label: "COPASA INTERIOR SUL",
  },
]

const HoleriteFilter: React.FC<Props> = ({ type, contrato, setContrato, setRefresh, ano, setAno, anos }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenAno, setIsOpenAno] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const dropdownAnoRef = React.useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownAno = () => {
    setIsOpenAno(!isOpenAno);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleClickOutsideAno = (event: MouseEvent) => {
    if (dropdownAnoRef.current && !dropdownAnoRef.current.contains(event.target as Node)) {
      setIsOpenAno(false);
    }
  };

  const handleRefresh = () => {
    const newRefresh = Math.floor(Math.random() * 10000)
    setRefresh(newRefresh)
  }

  React.useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])

  React.useEffect(() => {

    document.addEventListener('mousedown', handleClickOutsideAno);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideAno);
    };
  }, [])

  React.useEffect(() => {
    setCookie('contratoSelecionado', contrato)
  }, [contrato])

  React.useEffect(() => {
    setCookie('anoSelecionado', ano)
  }, [ano])

  return (
    <div className="flex h-10 w-full flex-row items-center justify-between rounded-sm bg-[#EAEAEA] pl-3 pr-3 mb-2">
      <div className='flex flex-row gap-3'>
        <div
          className="relative inline-block text-left "
          ref={dropdownRef}
        >
          <button
            onClick={toggleDropdown}
            className="h-6 w-56 flex flex-row items-center justify-center bg-white hover:bg-slate-200 rounded hover:border-slate-400 hover:border gap-2"
          >
            {contrato}
            <div className='rotate-90'>
              <Code size={16} />
            </div>
          </button>

          {isOpen && (
            <div className="flex flex-col gap-2  origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <>
                {contratos.map((_contrato) => {
                  return (
                    <label className='cursor-pointer hover:bg-primary hover:text-white rounded p-1 '>
                      <input
                        className=''
                        type='radio'
                        value={_contrato.value}
                        checked={_contrato.value === contrato}
                        onChange={() => {
                          if (_contrato.value !== contrato) {
                            setContrato(_contrato.value)
                            setIsOpen(!isOpen)
                          } else {
                            setIsOpen(!isOpen)
                          }
                        }} />
                      {_contrato.label}
                    </label>
                  )
                })}
              </>
            </div>
          )}
        </div>
        <div className="flex h-6 w-28 flex-row items-center justify-center bg-white rounded ">
          <div
            ref={dropdownAnoRef}
            className='relative inline-block text-left'
          >

            <button
              onClick={toggleDropdownAno}
              className="h-6 w-28 flex flex-row items-center   bg-white hover:border-slate-400 hover:border rounded"

            >
              <div className='mr-5 ml-7'>
                {ano}

              </div>
              <div className='rotate-90'>
                <Code size={16} />
              </div>
            </button>
            {
              isOpenAno && (
                <div className="flex flex-col r justify-center items-center gap-2 origin-top-right absolute right-0 mt-2  w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {anos.map((_ano) => {
                    return (
                      <div className='flex flex-row gap-2 justify-center items-center w-full cursor-pointer hover:bg-primary hover:text-white rounded p-1 transition-all'>
                        <input
                          className='cursor-pointer'
                          id={`${_ano}`}
                          type='radio'
                          value={_ano}
                          checked={_ano === ano}
                          onChange={() => {
                            if (_ano !== ano) {
                              setAno(_ano)
                              setIsOpenAno(!isOpenAno)
                            } else {
                              setIsOpenAno(!isOpenAno)
                            }
                          }}
                        />
                        <label className='cursor-pointer' htmlFor={`${_ano}`}>{_ano}</label>
                      </div>

                    )
                  })}
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div
        className='h-6 w-6 bg-white flex justify-center items-center rounded p-2 hover:border-slate-400 hover:border '
        onClick={handleRefresh}
      >
        <IconsView  >
          <RefreshCcw size={18} />
        </IconsView>
      </div>
    </div >
  )
}

export default HoleriteFilter
