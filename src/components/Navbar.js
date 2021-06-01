import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { CartContext} from '../contexts/cartContext'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

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
            {/* small screens */}
            <div className={`${context.shoppingCart.length ? 'text-red-500 ' : ''} md:hidden flex justify-between items-center space-x-5`} >
                <div className="md:hidden flex justify-between items-center ">
                    <a href="#">
                        <FontAwesomeIcon icon={faCartPlus} onClick={() => context.setIsDrawOpen(!context.isDrawOpen)} />
                    </a>
                </div>

                <button className="md:hidden inline-flex focus:outline-none" onClick={handleCLick} >
                        <img className=" block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                    
                </button>
            </div>

            {/* md-screen lg */}
            <section className={`${
                active ? '': 'hidden'
            } w-full md:flex md:justify-center md:items-center md:flex-grow md:w-auto`}>
                <ul className=" flex flex-col items-start ml-3 mx-3 md:flex-row md:w-auto md:space-x-6 md:text-2xl text-yellow-600" style={{
                    fontFamily: 'Montserrat'
                }}  >
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
                    <li  className="hover:text-yellow-300">
                        <a href="#products">
                            {product}
                    </a>
                    </li>
                    <li  className="hover:text-yellow-300">
                        <a href="#contact">
                            {contact}
                    </a>
                    </li>
                </ul>
            </section>

            

            {/* flags */}
            <section className={`${active ? '' : 'hidden'} md:flex md:relative  mr-8`} >

                <button className={`${active ? '' : 'hidden'} md:flex justify-center   md:mt-0 rounded border md:left-10 w-32 py-1 hover:bg-gray-100`} onClick={handleDropDown}>
                    <a className="text-sm text-yellow-600" href="#">{language}</a>
                </button>

                <ul className={`${!isDropDown ? 'hidden' : 'md:absolute bg-white  md:top-10 md:z-20 md:mb-0 mb-3 h-20 w-32 flex flex-col items-center '}`}>
                    {locales.map((loc) => (
                        // console.log(loc),
                        <>
                            <li key={loc} className="hover:bg-yellow-300 hover:text-white  overflow-hidden shadow-xl h-full w-32 pl-2">
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

            <section className="hidden md:flex items-center space-x-3 mx-2" >
                <div className="text-yellow-400 text-sm">
                    <span>123 456 789</span>
                </div>

                <div className={`${context.shoppingCart.length ? 'text-red-500 ' : ''}flex justify-between items-center`}>
                    <a href="#">
                        <FontAwesomeIcon icon={faCartPlus} onClick={() => context.setIsDrawOpen(!context.isDrawOpen)} />
                    </a>
                </div>

            </section>

        </nav>    
    )
}

export default NavBar;
