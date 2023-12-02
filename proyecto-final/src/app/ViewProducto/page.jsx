'use client'


import ViewProducto from "@/components/ViewProducto/ViewProducto";
import Navar from "@/components/Navbar/NavbarEstado";
import ListProduct from "@/components/ViewProducto/ListProduct";
import { useState, useEffect } from "react";


export default function ViewProduct(){
    const [productsU, setProdcutos]= useState([])
    const [oneProduct, setOneProduct]= useState("2")
    
    useEffect(()=>{
        let url= `https://fakestoreapi.com/products/${oneProduct}`
        fetch(url)
        .then( response =>response.json())
        .then (data => setProdcutos(data))
        .catch(error => console.log(error))
        },[])
    return (
        <>
            <Navar/>
            <ViewProducto productsU={productsU}></ViewProducto>
        </>
    )

}