import { createContext, useContext, useState } from 'react';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [shoppingCart, setShoppingCart] = useState([]);

    const onAdd = (product) => {
        const exist = shoppingCart.find((x) => x.id === product.id);
        if (exist) {
            setShoppingCart(
                shoppingCart.map((x) =>
                    x.id === product.id  ? {...exist, qty: exist.qty+1} :x
                )
            );
        } else {
            setShoppingCart([...shoppingCart,{...product, qty:1}])
        }
    }

    return (
        <CartContext.Provider value={{
            shoppingCart,
            setShoppingCart,
            onAdd
        }} >
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}