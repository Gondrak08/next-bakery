import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext} from '../contexts/cartContext'
import Link from 'next/link'



const NavBar = () => {
    const context = useContext(CartContext)
    const [isDropDown, setIsDropDown] = useState(false);
    const [active, setActive] = useState(false);
    
        console.log(context)

    const handleCLick = () => {
        setActive(!active);
    }
    const handleDropDown = () => {
        setIsDropDown(!isDropDown)
        console.log(isDropDown)
    }
    
    
    const {locales} = useRouter()
    let router = useRouter()
    let about = router.locale === 'pt-BR' ? 'Sobre' : router.locale === 'en-US' ? 'About' : router.locale === 'es' ? 'Acerca de' : '';
    let product = router.locale === 'pt-BR' ? 'Produtos' : router.locale === 'en-US' ? 'Products' : router.locale === 'es' ? 'Productos' : '';
    let contact = router.locale === 'pt-BR' ? 'Contato' : router.locale === 'en-US' ? 'Contact' : router.locale === 'es' ? 'Contacto' : '';
    let language = router.locale === 'pt-BR' ? 'Línguas' : router.locale === 'en-US' ? 'Languages' : router.locale === 'es' ? 'Idiomas' : '';
    

    return (
        <nav className=
            'container-screen  flex flex-wrap md:h-16 bg-white justify-between items-center px-3 md:px-32'
        >
            <section >
                <img src="/bakeryLogo.svg" alt="" className="h-16"/>
            </section>
            
            <button className="md:hidden inline-flex focus:outline-none" onClick={handleCLick} >
                    <img className=" block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                   
            </button>
      

            <section className={`${
                active ? '': 'hidden'
            } w-full md:flex md:justify-center md:items-center md:flex-grow md:w-auto`}>
                <ul className=" flex flex-col items-start ml-3 mx-3 md:flex-row md:w-auto md:space-x-6 md:text-2xl text-yellow-600" style={{
                    fontFamily: 'Montserrat'
                }} >
                    <li className="hover:text-yellow-300">
                        <a href="#">
                            Home
                </a>
                    </li>
                    <li className="hover:text-yellow-300">
                        <a href="#about">
                            {about}
                    </a>
                    </li>
                    <li className="hover:text-yellow-300">
                        <a href="#products">
                            {product}
                    </a>
                    </li>
                    <li className="hover:text-yellow-300">
                        <a href="#contact">
                            {contact}
                    </a>
                    </li>
                </ul>
            </section>

            <section className="hidden md:flex space-x-8 mx-2" >
                <div className="text-yellow-400 text-sm">
                    <span>123 456 789</span>
                </div>
                
                <div id="cart-info" className="flex justify-between items-center">
                    <span className="cart-info_icon mr-3">
                        <i className="fas fa-shopping-cart">
                        </i>
                    </span>
                    <p className="mb-0 capitalize text-sm text-red-500">
                        <span id="item-count">2</span>
                items - $
                <span className="item-total">
                            10.49
                </span>
                    </p>
                </div>

            </section>

            {/* flags */}
            <section className={`${active ? '' : 'hidden'} md:flex md:relative`} >
                <button className={`${active ? '' : 'hidden'} md:flex justify-center md:relative my-2 md:mt-0 rounded border md:left-10 w-32 py-1 hover:bg-gray-100`} onClick={handleDropDown}>
                    <a className="text-sm text-yellow-600" href="#">{language}</a>
                </button>
                <ul className={`${!isDropDown ? 'hidden' : 'md:absolute bg-white md:left-10 md:top-10 md:z-20 md:mb-0 mb-3 h-20 w-32 flex flex-col items-center '}` }>
                    {locales.map((loc) => (
                        // console.log(loc),
                        <>
                            <li className="hover:bg-yellow-300 hover:text-white  overflow-hidden shadow-xl h-full w-32 pl-2" key={loc}>
                                <Link className="w-32" href="/" locale={loc} >
                                    <a className="w-32" href="">
                                        {loc}
                                        {/* <img src="./pt.png" alt="" /> */}
                                    </a>
                                </Link>
                            </li>
                        </>
                    ))}
                </ul>

            </section>


        </nav>    
    )
}

export default NavBar;
