import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import About from '../components/About';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

import {useContext} from 'react'
import { useRouter } from 'next/router';
import { CartContext } from '../contexts/cartContext'

export default function Home() {
  let context = useContext(CartContext)
  let router = useRouter()
  
  let title = router.locale === 'pt-BR' ? 'Deixe-nos fazer parte da suas melhores memórias.' : router.locale === 'en-US' ? 'Let us be part of your memories.' : router.locale === 'es' ? 'Permítanos ser parte de sus recuerdos.' : '';

  let talkToUs = router.locale === 'pt-BR' ? 'Fale conosco' : router.locale === 'en-US' ? 'Talk to us' : router.locale === 'es' ? 'Hable con nosotros' : ''
  let name = router.locale === 'pt-BR' ? 'nome' : router.locale === 'en-US' ? 'name' : router.locale === 'es' ? 'nombre' : '';
  let phone = router.locale === 'pt-BR' ? 'telefone' : router.locale === 'en-US' ? 'phone' : router.locale === 'es' ? 'teléfono' : '';
  let message = router.locale === 'pt-BR' ? 'digite sua menssagem...' : router.locale === 'en-US' ? 'type your message...' : router.locale === 'es' ? 'Escribe tu mensaje...' : '';
  let send = router.locale === 'pt-BR' ? 'Enviar' : router.locale === 'en-US' ? 'Submit' : router.locale === 'es' ? 'Enviar' : '';

  


  return (
    <div className="container-screen h-full   w-auto">
      <header >    
        {context.isDrawOpen ? <Cart /> : ''}    
        <Navbar />
        <Hero />
      </header>
      
       
      <main>
          {/* about */}
        <About/>
        {/* products */}
        <Products />
          
        <section className="h-52 md:h-80 w-full flex items-center justify-center" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80)',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          backgroundRepeat:'no-repeat'
        }}>
          {/* <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" className="h-full w-full" alt=""/> */}
          <div className="w-96">
            <p className="md:text-3xl text-white text-center">
                "{title}" - Dona Maria -
            </p>
          </div>
        </section>
        {/* contact */}
        <section className="flex justify-center items-center h-96 bg-gray-100" id="contact">
          <div className="space-y-12" >
              <div className="flex-col aling-center" >
                <h2 className="text-center text-3xl text-gray-500">{talkToUs}</h2>
              <p className="text-center text-gray-500">donamaria@email.com</p>
                <hr className="mt-3"/>
              </div>

            <div className=" space-y-2 mx-5 md:mx-auto">
              <div className="flex flex-wrap   md:space-x-2 space-y-2 md:space-y-0 ">
                <div className="flex flex-col  space-y-1">
                <input type="text" placeholder={name} className="bg-gray-100 h-8 border pl-2 border-2 border-gray-400" />
                <input type="text" placeholder="email" className="bg-gray-100 h-8 border pl-2 border-2 border-gray-400" />
                <input type="text" placeholder={phone} className="bg-gray-100 h-8 border pl-2 border-2 border-gray-400" />
                </div>
                <div>
                  <textarea type="text" placeholder={message} className="md:w-72 h-auto md:h-full bg-gray-100 border-2 border-gray-400 pl-2 pt-1" style={{resize:'none'}}/>
                </div>
              </div>
                <button className="border-2 border-gray-300 w-20 h-8 hover:bg-yellow-500 hover:text-white" >{send}</button>
            </div>
          </div>
        </section>
      
      </main>
        
      <Footer/>
      </div>
  )   
}