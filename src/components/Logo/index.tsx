import React from 'react'
import Fimm from '@/assets/Logo.png'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className="mb-10 mt-5 flex flex-col items-center justify-center">
      <Image src={Fimm} alt="Logo" width={300} height={300} />
    </div>
  )
}

export default Logo
