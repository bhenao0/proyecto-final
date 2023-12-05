'use client'
import Navar from "@/components/Navbar/NavbarEstado"
import Cart from "@/components/Cart/Cart"
import { useEffect,useState } from "react"
export default function ViewProduct({params}){
    const [products, setProdcutos]= useState([])
    const cartLocalStorage = JSON.parse(localStorage.getItem("cartListx") || "[]")
    const [cartItems, setCartItems] = useState(cartLocalStorage)
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }
  

    useEffect(()=>{
        localStorage.setItem("cartListx", JSON.stringify(cartItems))
        let url= `https://fakestoreapi.com/products/${params.id}`
        fetch(url)
        .then( response =>response.json())
        .then (data => setProdcutos(data))
        .catch(error => console.log(error))
        },[cartItems])
        
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