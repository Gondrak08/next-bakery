
const NavBar = () => {
    return (
        <div className="container-screen flex flex-wrap h-16 bg-white justify-between items-center md:px-32">
            <div class="flex md:hidden">
                <button id="hamburger">
                    <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                    <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                </button>
            </div>

         
                <div >
                    <img src="/bakeryLogo.svg" alt="" className="h-16"/>
                </div>

                <ul  className="md:show flex w-auto space-x-6 text-2xl text-yellow-600" style={{
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

                <div className="md:show flex space-x-8" >
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

        </div>    
    )
}

export default NavBar;
