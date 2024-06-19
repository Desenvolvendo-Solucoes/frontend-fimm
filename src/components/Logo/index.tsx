import React from 'react'
import Fimm from '@/assets/Logo.png'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className="mb-3 mt-5 flex flex-col items-center justify-center">
      <Image src={Fimm} alt="Logo" width={150} height={150} />
    </div>
  )
}

export default Logo
