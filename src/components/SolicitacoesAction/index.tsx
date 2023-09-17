'use client'
import React, { useState } from 'react'
import { Data } from '@/types'
import { Edit2, Save, X } from 'react-feather'

type Props = {
  value: string
  row: Data
}

const SolicitacoesAction: React.FC<Props> = ({ value }: Props) => {
  const [isEditing, setIsEditing] = useState(false)

  if (isEditing) {
    return (
      <div className="flex flex-row gap-2">
        <X
          className="cursor-pointer"
          onClick={() => {
            setIsEditing(false)
          }}
        />
        <Save className="cursor-pointer" />
      </div>
    )
  } else {
    return (
      <Edit2
        className="cursor-pointer"
        onClick={() => {
          setIsEditing(true)
        }}
      />
    )
  }
}

export default SolicitacoesAction
