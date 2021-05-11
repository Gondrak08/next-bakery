import { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    // sideMenu
    const [isDrawOpen, setIsDrawOpen] = useState(false);
    const [shoppingCart, setShoppingCart] = useState([]);

    
    async function onAdd(item) {
        setShoppingCart((prev) => [...prev, item])
    }
    console.log(shoppingCart)
    // let id = 0;
    // const createRandomItem = () => {
    //     id = id + 1;
    //     return {
    //         id: shoppingCart.item.id,
    //         qty: 1,
    //         desc: `Item number: ${id}`,
    //         price: Number((Math.random() * 10 + 1).toFixed(2))
    //     }
    // }
    const getTotalItems = () => {
        let items = shoppingCart;
        items.reduce((ack = Number, item)=>ack +item.amout, 0)
    }

    
    return (
        <CartContext.Provider value={{
            shoppingCart,
            setShoppingCart,
            onAdd,
            isDrawOpen,
            setIsDrawOpen
        }} >
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}