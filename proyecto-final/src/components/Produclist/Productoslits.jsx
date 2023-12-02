import './Productoslits.css'
import Product from "@/components/Productos/Product";

export default function({products, addToCart}){


    return(
        <div className="Product-list">
            {
                products.map(product=>(
                    <Product  
                        key={product.id}
                        product={ product }
                        addToCart={ addToCart}    
                    >hola</Product>
                ))
            }
        </div>
    )
}