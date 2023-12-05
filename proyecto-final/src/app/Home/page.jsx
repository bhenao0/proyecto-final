'use client'
import PrivateRouter from "@/components/PrivateRoute"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navar from "@/components/Navbar/NavbarEstado";
import Productoslits from "@/components/Produclist/Productoslits";
import Cart from "@/components/Cart/Cart";


import { getAuth,signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";
export default function Home(){
    const router = useRouter()
    const [products, setProdcutos]= useState([])
    const [filtroCat, setFiltro] = useState("")
    const [searchProduct, setSearchProduct]=useState("")
    const cartLocalStorage = JSON.parse(localStorage.getItem("cartListx") || "[]")
    const [cartItems, setCartItems] = useState(cartLocalStorage)
    
    const producPage = async()=>{
        try{
            router.push('/Home')
            setFiltro(filtroCat => filtroCat='')
            }catch(error){}
        }
    const filtroProduct= event=>{
        setSearchProduct(event.target.value)
    }
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

    useEffect(() => {
        localStorage.setItem("cartListx", JSON.stringify(cartItems))
      }, [cartItems])

    const addProductsToCart = (productId) => {
        const addProduct = products.find(product => product.id === productId)
        setCartItems(prevItems => [...prevItems, addProduct])
    }
    const viewProduct =async(productId)=>{
        try{
            router.push('Home/'+ productId)           
        }catch(error){}
    }
    const removeFromCart = (productId) => {
        const index = cartItems.findIndex(item => item.id === productId);
         const cartStorageFilter = cartItems.filter((_, i) => i !== index);
       
        // const cartStorageFilter = cartItems.filter((item) => {
        //     return item.id !== productId
        //   })
          setCartItems(cartStorageFilter)  
        
        localStorage.setItem("cartListx", JSON.stringify(cartStorageFilter))
    }
    useEffect(()=>{
                let url= `https://fakestoreapi.com/products${ filtroCat }`
                fetch(url)
                .then( response =>response.json())
                .then (data => setProdcutos(data))
                .catch(error => console.log(error))
                            
    },[filtroCat])
    const productsResult = products.filter( (product) => product.title.toLowerCase().includes(searchProduct.toLowerCase()))
    return(
        
    <PrivateRouter>
        
        <Navar
            filtroElectronics={filtroElectronics}
            filtroJeweler={filtroJeweler}
            filtromensclothing ={ filtromensclothing }
            filtrowomensclothing={filtrowomensclothing}
            producPage ={producPage}
            filtroProduct ={filtroProduct}
        ></Navar>
        <Cart cartItems={ cartItems } removeToCart={ removeFromCart } />
        <Productoslits products={ productsResult } addToCart={ addProductsToCart } viewProduct={viewProduct} />
    </PrivateRouter>
    )
}