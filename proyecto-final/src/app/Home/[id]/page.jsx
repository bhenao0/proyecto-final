'use client'
import Navar from "@/components/Navbar/NavbarEstado"
import Cart from "@/components/Cart/Cart"
import { useEffect,useState } from "react"
export default function ViewProduct({params}){
    const [products, setProdcutos]= useState([])
    const [cartItems,setCartItems] = useState([])
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }
    useEffect(()=>{
        let url= `https://fakestoreapi.com/products/${params.id}`
        fetch(url)
        .then( response =>response.json())
        .then (data => setProdcutos(data))
        .catch(error => console.log(error))
        },[cartItems])
        console.log(JSON.parse(localStorage.getItem("cartList") || "[]") )
    return(
        <>
        <Navar></Navar>
        <Cart cartItems={ cartItems } removeToCart={ removeFromCart } />

        <div className="Product-list">
            
            {products.id}
                    
            
        </div>
        </>
    )
}