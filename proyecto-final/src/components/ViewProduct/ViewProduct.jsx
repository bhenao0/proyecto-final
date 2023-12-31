import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useRouter } from "next/navigation";
export default function Product({product, addToCart}){
    const {id, title, price, image,description }= product
return(
    <div className="Product">
            <img
                src={ image }
                alt={ title }
            />
            <h3>{ title }</h3>
            <p>$ { description }</p>
            <p>$ { categor }</p>
            <p>$ { price }</p>
            <Button className='AddToCar' onClick={() => addToCart(id)}
            > Añadir al Carrito
            </Button>
        </div>
)

}