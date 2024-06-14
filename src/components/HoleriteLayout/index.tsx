'use client'
import React, { useEffect, useState } from 'react'
import HoleriteMenu from './HoleriteMenu'
import HoleriteFilter from './HoleriteFilter'
import HoleriteCard from './HoleriteCard'
import addHoleriteImage from '../../assets/addHoleritesImage.svg'
import Image from 'next/image'
import { Upload } from 'react-feather'
import { ValidaToken, getAllHolerites, uploadHolerite } from '@api'
import { GetAllHoleriteResponse } from '@/types'
import Loading from '../Loading'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const HoleriteLayout: React.FC = () => {
  const [page, setPage] = useState<string>('holerites')
  const holeriteRef = React.useRef<HTMLInputElement | null>(null)
  const [holerites, setHolerites] = useState<GetAllHoleriteResponse>()
  const [isUpload, setIsupload] = useState<boolean>(false)
  const anoAtual = new Date().getFullYear()
  const { push } = useRouter()

  const openInputFile = async () => {
    if (holeriteRef.current == null) return

    holeriteRef.current.click()
  }

  const handleUploadHolerite = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData()
    if (!e.target.files) return
    formData.append('file', e.target.files[0])
    setIsupload(true)
    uploadHolerite(formData).then((response) => {
      console.log(response)
      setIsupload(false)
      toast.success('Holerite enviado com sucesso!')
    })
  }

  const getHolerites = async () => {
    await getAllHolerites().then((res) => {
      setHolerites(res)
      console.log(res)
    })
  }

  const renderPage = () => {
    if (page === 'holerites') {
      return (
        <>
          <h1 className="mb-4 text-[20px] font-bold">Holerites - {anoAtual}</h1>
          <HoleriteFilter type="filter" />
          <h1 className="mb-4 mt-4 text-[20px] ">Selecione o mês</h1>
          <div className="hide-scrollbar flex w-full flex-row flex-wrap gap-x-8 gap-y-5 overflow-scroll pb-2 pt-2 ">
            {holerites?.map((holerite) => (
              // eslint-disable-next-line react/jsx-key
              <HoleriteCard data={holerite.data} status={holerite.status} />
            ))}
          </div>
        </>
      )
    }
    if (page === 'addHolerites') {
      if (!isUpload) {
        return (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3">
            <Image
              src={addHoleriteImage}
              alt="add Holerite Image"
              width={222}
              height={165}
            />
            <div className="flex flex-col items-center justify-center gap-2">
              <p className="text-xl font-medium">
                Nenhum holerite selecionado.
              </p>
              <p className="text-lg text-[#868686]">
                Por favor, faça um upload do seu holerite.
              </p>
            </div>
            <button
              className="flex h-11 w-auto flex-row items-center justify-center gap-3 rounded-lg bg-[#1E1685] p-3  text-[white] hover:bg-[#120d53]"
              onClick={openInputFile}
            >
              <Upload width={20} height={20} />
              Adicionar Holerite
            </button>
          </div>
        )
      } else {
        return (
          <div className="flex h-full w-full items-center justify-center">
            <Loading />
          </div>
        )
      }
    }
  }

  useEffect(() => {
    getHolerites()
    ValidaToken().catch(() => {
      push('/')
    })
  }, [page, push])

  return (
    <div className="h-full w-full bg-[#F9FBFD]/[0.30] p-8">
      <HoleriteMenu setPage={setPage} page={page} />
      {renderPage()}

      <input
        className="hidden"
        ref={holeriteRef}
        onChange={handleUploadHolerite}
        type="file"
        accept="application/pdf"
        name="file"
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default HoleriteLayout
