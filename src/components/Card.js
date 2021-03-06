import React, { useContext } from 'react'
// 
import { CartContext } from '../contexts/cartContext'
// fonts
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    let context = useContext(CartContext)
    // console.log(context.shoppingCart);
    return (
        <>
            {
              props.products.map((product) => (
                    <div key={product.id} id={product.id} className="flex flex-col border bg-white rounded  md:h-72 md:w-72 hover:shadow-2xl mb-3">
                        <div className="relative img-container overflow-hidden h-full bg-black">
                            <img src={product.img} alt="" className="w-full h-full store-img" />
                            <button onClick={() => context.onAdd(product)} className="store-item-icon" >
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </button>
                        </div>
                        <div className="flex justify-between items-center px-4  h-16 bg-white " >
                            <p className="text-xl" style={{
                                fontFamily: 'Montserrat'
                            }}  >
                                {product.name}
                            </p>
                            <p ><span>$</span> {product.price}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card;