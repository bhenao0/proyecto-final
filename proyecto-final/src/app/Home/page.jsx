
// COMPONENTE PADRE


'use client'
import PrivateRouter from "@/components/PrivateRoute"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navar from "@/components/Navbar/NavbarEstado";
import ViewProducto from "@/components/ViewProducto/ViewProducto";
import Productoslits from "@/components/Produclist/Productoslits";

import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";


export default function Home(){
    const router = useRouter()
    const [products, setProdcutos]= useState([])
    const [filtroCat, setFiltro] = useState("")
    
    const filtroElectronics = () => {
        setFiltro(filtroCat => filtroCat='/category/electronics') 
    }
    const filtroJeweler = () => {
        setFiltro(filtroCat => filtroCat='/category/jewelery')
    }
    const filtromensclothing = () => {
        setFiltro(filtroCat => filtroCat=`/category/men's clothing`)
    }
    const filtrowomensclothing = () => {
        setFiltro(filtroCat => filtroCat=`/category/women's clothing`)
    }
    const homePage = () => {
        setFiltro(filtroCat => filtroCat='')
        
    }
    useEffect(()=>{
        let url= `https://fakestoreapi.com/products${ filtroCat }`
        fetch(url)
        .then( response =>response.json())
        .then (data => setProdcutos(data))
        .catch(error => console.log(error))
        console.log(products)
        },[filtroCat])
        
    return(
        
    <PrivateRouter>
        <Navar
            filtroElectronics={filtroElectronics}
            filtroJeweler={filtroJeweler}
            filtromensclothing ={ filtromensclothing }
            filtrowomensclothing={filtrowomensclothing}
            homePage ={homePage}
        />
        <Productoslits products={ products}/>
        

    </PrivateRouter>
    )
}
