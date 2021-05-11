import react, {useContext} from 'react'
import { CartContext } from '../contexts/cartContext';
// styles icons


export const Cart = () => {
    const context = useContext(CartContext);
    return (
        <>
            
            <div className="relative float-right flex flex-col h-full bottom-1  w-80 bg-blue-500 transition ease-out duration-100 sideBar">
                    <h1>Produtos no carrinho de compras</h1>
                    <div>
                        
                    </div>
                </div>
            
        </>
    )
}

export default Cart;