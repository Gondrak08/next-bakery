import react, { useContext } from 'react'

import { useRouter } from 'next/router';
import { CartContext } from '../contexts/cartContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons'

import CartItem from './CartItem'



export const Cart = () => {
    let router = useRouter();
    let close = router.locale==='pt-BR' ? 'Fechar carrinho' : router.locale==='en-US' ? 'Close cart' : router.locale==='es' ? 'Cerrar carrito' : '';
    let products = router.locale === 'pt-BR' ? 'Produtos no carrinho de compras' : router.locale === 'en-US' ? 'Products in the shopping cart' : router.locale === 'es' ? 'Productos en el carrito de compras' : ''
    let total = router.locale==='pt-BR' ? 'Valor total' : router.locale==='en-US' ? 'Total' : router.locale==='es' ? 'Valor total'  : ''

    const context = useContext(CartContext);

    const itemsPrice = context.shoppingCart.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 0 ? 3.59 : 0;
    const totalPrice = itemsPrice > 0 ? itemsPrice + shippingPrice: 0;

    return (
        <>
            <div className="Modal" id="myModal">
                <div onClick={() => context.setIsDrawOpen(false)} />
                    <div className="relative float-right flex flex-col h-full pt-5 w-96 bg-white">
                    <h2 className="pl-2 pb-2" >{products}</h2>
                        <div>
                            <CartItem/>
                        </div>
                        <div className="flex justify-end space-x-3 px-12 mt-2   items-center">
                            <p>{total}: {' '} $ {' '} <span>{totalPrice}</span></p>
                            <FontAwesomeIcon icon={faTruck} color="red" />
                        </div>

                        <div className="md:hidden relative top-10 flex justify-center items-center" >
                        <button className="border w-36" onClick={() => context.setIsDrawOpen(false)}>{close}</button>
                        </div>
                    </div>
            </div>
            
        </>
    )
}

export default Cart;