import react, { useContext } from 'react'
import { CartContext } from '../contexts/cartContext'
import CartItem from './CartItem'

export const Cart = () => {
    const context = useContext(CartContext);

    return (
        <>
            <div className="Modal" id="myModal">
                <div onClick={() => context.setIsDrawOpen(false)} />
                <div className="relative float-right flex flex-col h-full pt-5 w-96 bg-white">
                    <h2 className="pl-2 pb-2" >Produtos no carrinho de compras</h2>
                    <div>
                        <CartItem/>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Cart;