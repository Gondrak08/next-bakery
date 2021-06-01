import { createContext,  useState, } from 'react';


const CartContext = createContext();

const CartProvider = ({ children }) => {
    // sideMenu
    const [isDrawOpen, setIsDrawOpen] = useState(false);
    
    const [shoppingCart, setShoppingCart] = useState([]);


    const onAdd = async (product) => {
       // two ways that can be done:

        // setShoppingCart(()=> {
        //     let x=false
        //     const cart = shoppingCart.slice()
        //     cart.forEach(item => {
        //         if (item.id === product.id){
        //             item.count++ 
        //             x=true
        //         };})
        //         if (!x) {
        //             cart.push({...product, count:1})
        //         }
        //     return setShoppingCart(cart)
        // })
        const exist = shoppingCart.find((x) => x.id === product.id)
        if (exist) {
            setShoppingCart(shoppingCart.map((x)=>x.id===product.id?{...exist, qty:exist.qty+1}:x))
        } else {
            setShoppingCart([...shoppingCart,{...product, qty:1}])
        }

    }

    const onRemove = (product) => {
        setShoppingCart(() => {
            const exist = shoppingCart.find((x) => x.id === product.id);
            if (exist.qty === 1) {
                setShoppingCart(shoppingCart.filter((item) => item.id !== product.id));
            } else {
                setShoppingCart(shoppingCart.map((item) =>
                    item.id===product.id?{...exist, qty: exist.qty -1} : item
                ))
            }
        })
    }
    

    
    return (
        <CartContext.Provider value={{
            shoppingCart,
            setShoppingCart,
            onAdd,
            onRemove,
            isDrawOpen,
            setIsDrawOpen
        }} >
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider, CartContext}