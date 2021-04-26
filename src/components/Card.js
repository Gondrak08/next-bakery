import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { storeItems } from '../data';

const Card = () => {
    return (
        <>
            {
                storeItems.map((item) => (
                    <div key={item.id} id={item.id} className="flex flex-col border bg-white rounded h-72 w-72 hover:shadow-2xl mb-3">
                        <div className="relative img-container overflow-hidden h-full bg-black">
                            <img src={item.img} alt="" className="w-full h-full store-img" />
                            <span className="store-item-icon" >
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </span>
                        </div>
                        <div className="flex justify-between items-center px-4  h-16 bg-white " >
                            <p className="text-xl" style={{
                                fontFamily: 'Montserrat'
                            }}  >
                                {item.name}
                </p>
                            <p><span>$</span> {item.price}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Card;