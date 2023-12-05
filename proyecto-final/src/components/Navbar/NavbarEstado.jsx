
// COMPONENTE HIJO 


'use client'

import '@/assets/css/Navbar.css'
import firebase from '@/data/firebase'

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavbarEstado ({homePage,filtroElectronics,filtroJeweler,filtromensclothing,filtrowomensclothing,filtroProduct,filtroCategorias,pageProduct}){
    const auth = getAuth(firebase);
    const router = useRouter()
    const [user, setUser]= useState('')

    const handlerSingOut = ()=>{
        signOut(auth)
        .then(()=>{
            router.push('/')
        }).catch((error =>{
            console.log(error.message)
        }))
    }
    const inicioPage = async()=>{
        try{
            router.push('/')
            }catch(error){}
        }
    
    const registerPage = async()=>{
        try{
            router.push('/Register')
            }catch(error){}
        }
    const loginPage = async()=>{
        try{
            router.push('/Login')
            }catch(error){}
        }
            
    useEffect(()=>{
        
        onAuthStateChanged(auth, (myUser) => {
            if(myUser){
                setUser(myUser)
            }else{
                setUser(myUser)
            }
        });
    },[user])
    if(user !== null){
        return (
            <nav className="header">
                <div className='Busqueda'>
                    <input  
                        placeholder="¡Ingresar tu Palabra de busqueda!"
                        onChange={filtroProduct}
                    />
                    <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 
                        40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                    </svg>
                    </button>
                </div> 
                <ul className='nav'>
                    <li><a onClick={ () => inicioPage() }>HOME</a></li>
                    <li><a onClick={ () => pageProduct()}>PRODUCTOS</a></li>
                    <li><a >CATEGORIAS</a>
                        <ul className='Cat'>
                            <li><a onClick={ () => pageProduct()}>Todas Categorias</a></li>
                            <li><a onClick={() => filtroElectronics()}>Electronico</a></li>
                            <li><a onClick={() => filtroJeweler()}>Joyas</a></li>
                            <li><a onClick={() => filtromensclothing()}>Hombre</a></li>
                            <li><a onClick={() => filtrowomensclothing()}>Mujer</a></li>
                        </ul>
                    </li>
                    
                </ul>
                <ul className="nav">
                    <li><a onClick={ (handlerSingOut) }>CERRAR SESION</a></li>
                    </ul>
            </nav>
        )
    }else{
        return(
            <nav className="header">
                <ul className="nav">
                <li><a onClick={ homePage }>INICIO</a></li>
                    <li><a href="#">ACERCA DE NOSOTROS</a>
                    </li>
                </ul>
                <ul className="nav">
                    <li><a onClick={ loginPage }>INICIAR SESION</a></li>
                    <li><a onClick={ registerPage }>REGISTRARSE</a></li>
                </ul>
            </nav>
        ) 
    }
        
}