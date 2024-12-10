
import React from 'react'
import Card from './Card'

function NormalGrid() {
  return (
    <div className='flex flex-col h-full px-4 gap-3 w-screen overflow-x-hidden'>
        <div className='flex flex-col md:flex-row  justify-between'>
            <div className='font-Regular text-[35px]'>Ces produits pourraient vous intéresser</div>
            <div className='pr-5'>Voir toute la collection</div>
        </div>
      <div className='flex flex-col md:flex-row pr-4 gap-3 md:gap-1'>
        <Card/>
        <Card/>
        <Card/>
    </div>
    </div>
  )
}

export default NormalGrid