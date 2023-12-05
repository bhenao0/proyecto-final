'use client'
import NavbarEstado from "@/components/Navbar/NavbarEstado"
import { useEffect,useState } from "react"
export default function ViewProduct({params}){
    const [products, setProdcutos]= useState([])
    useEffect(()=>{
        let url= `https://fakestoreapi.com/products/${params.id}`
        fetch(url)
        .then( response =>response.json())
        .then (data => setProdcutos(data))
        .catch(error => console.log(error))
        
        },[])
        console.log(products)
    return(
        <>
        
        <div className="Product-list">
            
            {products.id}
                    
            
        </div>
        </>
    )
}