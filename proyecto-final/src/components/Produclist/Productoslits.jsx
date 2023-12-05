import './Productoslits.css'
import Product from "@/components/Productos/Product";

export default function({products, addToCart,viewProduct }){


    return(
        <div className="Product-list">
            {
                products.map(product=>(
                    <Product  
                        key={product.id}
                        product={ product }
                        addToCart={ addToCart}
                        viewProduct={viewProduct}    
                    >hola</Product>
                ))
            }
        </div>
    )
}