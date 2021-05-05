import react, {useContext} from 'react'
import { cartContext } from '../contexts/cartContext';

export const CartBasket = () => {
    const context = useContext(cartContext);
    return (
        <>
            <div>
                <h1>Produtos no carrinho de compras</h1>
                <div>
                    {context.shoppingCart.length===0&& <div>O carrinho está fazio</div> }
                </div>
            </div>
        </>
    )
}