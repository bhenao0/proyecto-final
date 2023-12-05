'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navar from '@/components/Navbar/NavbarEstado';

import '@/assets/css/Index.css'

export default function MainPage(){
    
    return(
        <>
        <div className='Banner'>
            <h1>BIENVENIDO</h1>
        </div>
        <Navar/>
        <div className='Slider'>
            <img src='https://images.vexels.com/content/194732/preview/online-shopping-web-slider-3fe85b.png' alt="Titulo" /> 
            
        </div> 
        
        </>
    )
}