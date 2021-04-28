import React, { useState } from 'react';

const NavBar = () => {

    const [active, setActive] = useState(false);
    console.log(active);
    const handleCLick = () => {
        setActive(!active);
    }


    return (
        <nav className=
            'container-screen  flex flex-wrap md:h-16 bg-white justify-between items-center px-3 md:px-32'
        >
            <div >
                <img src="/bakeryLogo.svg" alt="" className="h-16"/>
            </div>
            
            <button className="md:hidden inline-flex focus:outline-none" onClick={handleCLick} >
                    <img className=" block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                   
            </button>
      

            <div className={`${
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
                            Sobre
                    </a>
                    </li>
                    <li className="hover:text-yellow-300">
                        <a href="#products">
                            Produtos
                    </a>
                    </li>
                    <li className="hover:text-yellow-300">
                        <a href="#contact">
                            Contato
                    </a>
                    </li>
                </ul>

            </div>


            <div className="hidden md:flex space-x-8" >
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
            </div>

        </nav>    
    )
}

export default NavBar;
