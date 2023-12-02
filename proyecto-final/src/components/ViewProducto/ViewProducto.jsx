
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export default function VistaProduct({productsU, addToCart}){
    const {id, title, price, image, description}= productsU
    
return(
    <div className="Product">
            <img
                src={ image }
                alt={ title }
            />
            <h3>{ title }</h3>
            <h5>{id}</h5>
            <p>$ { description }</p>
            <p>$ { price }</p>
            <Button className='AddToCar' onClick={() => addToCart(id)}
            > Añadir al Carrito
            </Button>
        </div>
)

}