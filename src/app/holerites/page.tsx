import React from 'react'
import Sidebar from '@/components/Sidebar'
import Container from '@/components/Container'
import HoleriteLayout from '@/components/HoleriteLayout'

const holerites: React.FC = () => {
  return (
    <Container>
      <Sidebar screen="Holerites" />
      <HoleriteLayout />
    </Container>
  )
}

export default holerites
