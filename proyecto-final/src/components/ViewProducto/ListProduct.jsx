
import Product from "@/components/Productos/Product";
import ViewProduct from "@/app/ViewProducto/page";

export default function ViewProducto({productsU, addToCart}){

    return(
        <div className="Product-list">
            {
                productsU.map(product=>(
                    <VistaProduct  
                        key={product.id}ll
                        product={ product }
                        addToCart={ addToCart}    
                    ></VistaProduct>
                ))
            }
        </div>
    )
}