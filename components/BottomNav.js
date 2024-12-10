import React from 'react'
import Logo from './Logo/Logo'
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function BottomNav() {
  return (
    <div className='flex flex-col md:flex-row justify-between overflow-x-hidden'>
            <div className='flex flex-col md:flex-row p-2 gap-11'>
                <div className='w-1/4 justify-center h-1/2'><Logo/></div>
                <div>
                    <div className='text-xl font-Regular'><b>INFOS PRATIQUES</b></div>
                    <div className='text-sm font-Regular'>À propos</div>
                    <div className='text-sm font-Regular'>Livraisons & Reprises</div>
                    <div className='text-sm font-Regular'>Mode d’emploi</div>
                    <div className='text-sm font-Regular'>F.A.Q</div>
                </div>
                <div>
                    <div className='text-xl font-Regular'><b>LÉGAL</b></div>
                    <div className='text-sm font-Regular'>Mentions légales</div>
                    <div className='text-sm font-Regular'>CGU</div>
                    <div className='text-sm font-Regular'>CGV</div>
                    <div className='text-sm font-Regular'>Politique de confidentialité</div>
                </div>
                <div>
                    <div className='text-xl font-Regular'><b>MON COMPTE</b></div>
                    <div className='text-sm font-Regular'>Accéder à mon compte</div>
                    <div className='text-sm font-Regular'>Ma liste d’envie</div>
                    <div className='text-sm font-Regular'>Créer un compte</div>
                    <div className='text-sm font-Regular'>Mot de passe oublié</div>
                </div>
                
            </div>
            <div className='flex flex-col pr-9 p-3'>
                <div className='font-Regular text-left md:text-right'>NOUS SUIVRE</div>
                <div className='flex gap-2'>
                    <div className='p-2 border rounded-md'>
                        <FaTwitter/>
                    </div>
                    <div className='p-2 border rounded-md'>
                        <FaLinkedin/>
                    </div>
                    <div className='p-2 border rounded-md'>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BottomNav