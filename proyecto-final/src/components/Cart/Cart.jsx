import '@/components/Cart/Cart.css'
import { React, useState, useEffect } from "react";
export default function Cart({ cartItems, removeToCart }){   
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const calculatePrice = () => {
            const total = cartItems.reduce((accumulator, item) => {
                return accumulator + item.price
            }, 0)
            setTotalPrice(total)
        }
        calculatePrice()
    }, [cartItems])
    return (
        <> <ul className='Cart'>
            <ul className='navOculto'>
                <li><h2>Carrito de compras</h2>
                    <ul>
                    {
                    cartItems.map(item => (
                        <li key={ item.id }>
                            { item.title } ($ { item.price } ) 
                            <button onClick={ () => removeToCart(item.id) }>
                                Eliminar
                            </button>
                        </li>
                    ))
                }
                    </ul>
                </li>
                <li>Total: $ { totalPrice }</li>
            </ul>
            <p>
                
            </p>
            </ul>
        </>
    )
}
