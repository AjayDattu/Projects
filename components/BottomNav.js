import React from 'react'
import Logo from './Logo/Logo'

function BottomNav() {
  return (
    <div className='flex flex-col md:flex-row justify-between overflow-x-hidden'>
            <div className='flex flex-col md:flex-row p-2 gap-11 justify-center'>
                <div className='w-1/4 h-1/2'><Logo/></div>
                <div>
                    <div className='text-xl font-Regular'><b>INFOS PRATIQUES</b></div>
                    <div className='text-sm font-Regular'>À propos</div>
                    <div className='text-sm font-Regular'>Livraisons & Reprises</div>
                    <div className='text-sm font-Regular'>Mode d’emploi</div>
                    <div className='text-sm font-Regular'>F.A.Q</div>
                </div>
                <div>
                    <div className='text-xl font-Regular'><b>INFOS PRATIQUES</b></div>
                    <div className='text-sm font-Regular'>À propos</div>
                    <div className='text-sm font-Regular'>Livraisons & Reprises</div>
                    <div className='text-sm font-Regular'>Mode d’emploi</div>
                    <div className='text-sm font-Regular'>F.A.Q</div>
                </div>
                <div>
                    <div className='text-xl font-Regular'><b>INFOS PRATIQUES</b></div>
                    <div className='text-sm font-Regular'>À propos</div>
                    <div className='text-sm font-Regular'>Livraisons & Reprises</div>
                    <div className='text-sm font-Regular'>Mode d’emploi</div>
                    <div className='text-sm font-Regular'>F.A.Q</div>
                </div>
                
            </div>
            <div>
                <div>NOUS SUIVRE</div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
    </div>
  )
}

export default BottomNav