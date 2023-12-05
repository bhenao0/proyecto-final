'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './id.css'
import Navar from "@/components/Navbar/NavbarEstado"
import Cart from "@/components/Cart/Cart"
import { useEffect,useState } from "react"
import { Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";
export default function ViewProduct({params,addToCart}){
    const router = useRouter()
    const [products, setProdcutos]= useState([])
    const [filtroCat, setFiltro] = useState("")
    const cartLocalStorage = JSON.parse(localStorage.getItem("cartListx") || "[]")
    const [cartItems, setCartItems] = useState(cartLocalStorage)
    const removeFromCart = (productId) => {
        const index = cartItems.findIndex(item => item.id === productId);
        const cartStorageFilter = cartItems.filter((_, i) => i !== index);
        // const cartStorageFilter = cartItems.filter((item) => {
        //     return item.id !== productId
        //   })
        setCartItems(cartStorageFilter)  
        
        localStorage.setItem("cartListx", JSON.stringify(cartStorageFilter))
    }
    const addProductsToCart = (productId) => {
        
        setCartItems(prevItems => [...prevItems, products])
    }
    const pageProduct = async()=>{
        try{
            router.push('/Home')
            }catch(error){}
        }
        const filtroProduct= event=>{
            setSearchProduct(event.target.value)
        }
        const filtroElectronics = () => {
            router.push('/Home')
            setFiltro(filtroCat => filtroCat='/category/electronics') 
        }
        const filtroJeweler = () => {
            router.push('/Home')
            setFiltro(filtroCat => filtroCat='/category/jewelery')
        }
        const filtromensclothing = () => {
            router.push('/Home')
            setFiltro(filtroCat => filtroCat=`/category/men's clothing`)
        }
        const filtrowomensclothing = () => {
            router.push('/Home')
            setFiltro(filtroCat => filtroCat=`/category/women's clothing`)
        }
        const filtroCategorias =() =>{
            router.push('/Home')
        }
        useEffect(() => {
            localStorage.setItem("cartListx", JSON.stringify(cartItems))
        }, [cartItems])   
    useEffect(()=>{
        localStorage.setItem("cartListx", JSON.stringify(cartItems))
        let url= `https://fakestoreapi.com/products/${params.id}`
        fetch(url)
        .then( response =>response.json())
        .then (data => setProdcutos(data))
        .catch(error => console.log(error))
        },[])
    return(
        <>
        <Navar 
            pageProduct={pageProduct}
            filtroElectronics={filtroElectronics}
            filtroJeweler={filtroJeweler}
            filtromensclothing ={ filtromensclothing }
            filtrowomensclothing={filtrowomensclothing}
            filtroProduct ={filtroProduct}
            filtroCategorias={filtroCategorias}
        > 
        </Navar>
        <Cart cartItems={ cartItems } removeToCart={ removeFromCart }  />
        <div className="DetailProduct">
        <img
            src={ products.image }
            alt={ products.title }
        />
            <h3>{ products.title }</h3>
            <h4>{ products.description }</h4>
            <p>$ { products.price }</p>
            <Button className='addCart' onClick={() => addProductsToCart(products.id)}
            > Añadir al Carrito
            </Button>
        </div>
        </>
    )
}