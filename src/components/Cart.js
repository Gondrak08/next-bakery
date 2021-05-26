import react, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'

import CartItem from './CartItem'

export const Cart = () => {
    const context = useContext(CartContext);

    const itemsPrice = context.shoppingCart.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 0 ? 3.59 : 0;
    const totalPrice = itemsPrice > 0 ? itemsPrice + shippingPrice: 0;

    return (
        <>
            <div className="Modal" id="myModal">
                <div onClick={() => context.setIsDrawOpen(false)} />
                <div className="relative float-right flex flex-col h-full pt-5 w-96 bg-white">
                    <h2 className="pl-2 pb-2" >Produtos no carrinho de compras</h2>
                    <div>
                        <CartItem/>
                    </div>
                    <div className="flex justify-end space-x-3 px-12 mt-2   items-center">
                        <p>Valor Total: {' '} $ {' '} <span>{totalPrice}</span></p>
                        <FontAwesomeIcon icon={faTruck} color="red" />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cart;