'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/Container'
import Sidebar from '@/components/Sidebar'
import HoleriteFilter from '@/components/HoleriteLayout/HoleriteFilter'
import HoleriteMenu from '@/components/HoleriteLayout/HoleriteMenu'
import { ArrowLeft } from 'react-feather'
import Loading from '@/components/Loading'

export default function Page({ params }: { params: { mes: string } }) {
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState<string>('holerites')
  const router = useRouter()

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex h-[calc(100%-10rem)] flex-grow items-center justify-center">
          <Loading />
        </div>
      )
    }

    if (!loading) {
      return <div></div>
    }
  }

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 5000)
  // }, [loading])

  return (
    <Container>
      <Sidebar screen="Holerites" />
      <div className="h-full w-full bg-[#F9FBFD]/[0.30] p-8">
        <HoleriteMenu setPage={setPage} page={page} />
        <h1 className="mb-4 text-[20px] font-bold">Holerites - 2023</h1>
        <HoleriteFilter />
        <p
          className="m-0 mt-2 flex w-auto flex-1 cursor-pointer items-center gap-2 p-0 text-base font-bold text-[#1E1685]"
          onClick={(e) => {
            e.preventDefault()
            router.push('/holerites')
          }}
        >
          <ArrowLeft size={20} /> Voltar
        </p>
        {renderContent()}
      </div>
    </Container>
  )
}
