import React from 'react'
import Tcm from '@/assets/Logo.jpeg'
import Image from 'next/image'

const Logo: React.FC = () => {
  return (
    <div className="mb-10 mt-5 flex flex-col items-center justify-center">
      <Image src={Tcm} alt="Logo" width={150} height={150} />
    </div>
  )
}

export default Logo
