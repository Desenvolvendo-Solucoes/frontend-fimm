import React from 'react'
import IconsView from './IconsView'
import View1 from '@/components/Icons/View1'
import View2 from '@/components/Icons/View2'

const LayoutView: React.FC = () => {
  return (
    <div className="grid h-5 w-16 grid-cols-2 grid-rows-1 rounded">
      <IconsView selected={false}>
        <View1 color="#1E1685" />
      </IconsView>
      <IconsView selected={true}>
        <View2 />
      </IconsView>
    </div>
  )
}

export default LayoutView
