import React from 'react'
import { Download } from 'react-feather'

const DownloadDefault = () => {
  return (
    <div className=" w-1/5 ">
      <button className="flex w-11/12 cursor-pointer rounded-md border border-btn-primary  px-4 py-2 text-btn-primary focus:border-gray-300 focus:outline-none">
        <Download className="mr-1" />
        Download Padrão
      </button>
    </div>
  )
}

export default DownloadDefault
