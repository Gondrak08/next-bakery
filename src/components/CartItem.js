import react, { useContext } from 'react';
import { CartContext } from '../contexts/cartContext'

export const CartItem = () => {
    const context = useContext(CartContext);
    
   

    return (
        <>
            {context.shoppingCart.map((product) => (
                <div key={product.id} id={product.id} className="flex justify-between  w-full h-auto px-6 py-3 border-t border-b">
                    <div className="flex-1 ">
                        <h3 className="ml-2" >{product.name}</h3>
                        <div className="w-24 relative top-1  h-auto ml-1  flex px-2 justify-between" >
                            <button className="butn flex justify-center items-center w-6 bg-gray-200" onClick={()=> context.onAdd(product)} >
                                +
                            </button>
                            <button className="btn flex justify-center items-center  w-6 bg-gray-200" onClick={()=> context.onRemove(product)} >
                                -
                            </button>
                        </div>
                    </div>
                    <div>
                        <p>Preço: {product.price} </p>
                        <p>Quantitade: {product.qty}</p>
                        <p>Total: {product.price * product.qty} </p>
                    </div>
                    <div className="w-20 h-16 order-first">
                        <img src={product.img} alt=""/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartItem;