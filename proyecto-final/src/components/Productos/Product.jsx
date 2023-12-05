import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";
export default function Product({product, addToCart, viewProduct}){
    const {id, title, price, image, }= product
    const router = useRouter()
return(
    <div className="Product">
            <img
                src={ image }
                alt={ title }
            />
            <h3>{ title }</h3>
            <p>$ { price }</p>
            <Button className='AddToCar' onClick={() => viewProduct(id)}>Ver Producto</Button>
            <Button className='AddToCar' onClick={() => addToCart(id)}
            > Añadir al Carrito
            </Button>
        </div>
)

}