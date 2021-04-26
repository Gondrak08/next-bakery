
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'




import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js'
import Card from '../components/Card';

export default function Home() {
  return (
    <body className="container-screen h-screen ">
      <Navbar />
      <Hero />
      {/* about */}
      <section id="about" className="flex w-100 justify-center">
        <div className="flex w-5/6 p-20 items-center justify-center space-x-32">
          <div className="flex flex-col w-96 space-y-3">
            <h1 className="text-center text-4xl" style={{ color: 'rgb(239, 121, 152)' }} >Quem Somos</h1>
            <p className="text-justify text-gray-800 mx-3">Dona Chica Delicatessen presente em vários momentos do seu dia-a-dia, escolha o seu tempo para desfrutar de uma cozinha generosa ... muito atual. Nos primeiros raios de sol, você não trocará de lugar para se beneficiar de um maravilhoso café da manhã, por nossa e sua felicidade. Sozinho, com família ou em grupo, não importa o que traga você a Dona Chica, o importante é a certeza de que nossa equipe atenciosa lhe dará as boas-vindas mais agradáveis. E quem sabe voltará a provar, um pouco de nostalgia em seu coração, da cozinha caseira. Entre e sinta-se em casa.
            </p>
          </div>
          <div className="about-img">
              <img src="/us.jpeg" width="600" alt=""/>
          </div>
        </div>
      </section>

      {/* products */}
      <section id="products" className="h-auto  py-12 bg-gray-100">
        {/* product buttons */}
        <h1 className="text-center text-3xl" style={{ color: 'rgb(239, 121, 152)' }} >Nossos produtos</h1>
        <div className="flex justify-center space-x-8 mt-4" style={{fontFamily: 'Montserrat'}}>
          <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-4">Tudo</a>
          <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-4">Bolos</a>
          <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-4">Pães</a>
          <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-4">Doces</a>
          <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white  py-2 px-4">Assados</a>
        </div>
        {/* search bar */}
        <div className="mt-4 flex justify-center">
          <span className="bg-white border rounded-r-none flex items-center justify-center w-10" >
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input type="text" name="" id="" className="w-1/3 h-8 border rounded rounded-l-none pl-2 "/>
        </div>
        {/* items display */}
        <div className="flex justify-evenly flex-wrap h-auto w-3/5 mx-auto pt-5 " >
            <Card/>
        </div>
      </section>

      <section className="h-2/5 w-full flex items-center justify-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80)',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat:'no-repeat'
      }}>
        {/* <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1960&q=80" className="h-full w-full" alt=""/> */}
        <div className="w-96">
          <p className="text-3xl text-white text-center">
            "Deixe-nos fazer parte da suas melhores memórias." - Dona Maria -
          </p>
        </div>
      </section>

      <section id="contact" className="flex justify-center items-center h-2/4 bg-gray-100">
        <div className="space-y-12" >
            <div className="flex-col aling-center" >
            <h2 className="text-center text-3xl text-gray-500">Fale conosco</h2>
            <p className="text-center text-gray-500">donamaria@email.com</p>
              <hr className="mt-3"/>
            </div>

          <div className="space-y-2">
            <div className="flex space-x-2 ">
              <div className="flex flex-col space-y-1">
              <input type="text" placeholder="nome" className="bg-gray-100 h-8 border pl-2 border-2 border-gray-400" />
              <input type="text" placeholder="email" className="bg-gray-100 h-8 border pl-2 border-2 border-gray-400" />
              <input type="text" placeholder="telefone" className="bg-gray-100 h-8 border pl-2 border-2 border-gray-400" />
              </div>
              <div>
                <textarea type="text" placeholder="digite sua mensagem..." className="w-72 h-full bg-gray-100 border-2 border-gray-400 pl-2 pt-1" style={{resize:'none'}}/>
              </div>
            </div>
            <button className="border-2 border-gray-300 w-20 h-8 hover:bg-yellow-500 hover:text-white" >Enviar</button>
          </div>
        </div>
      </section>

      <footer className="bg-black h-10">
        <div className="flex justify-between items-center h-full mx-32">
          <div className="flex text-white text-sm space-x-3">
            <p className="text-white">
              Dona Chica
          </p>
            <p>
              Rua: Albetro Antunes. Número: 0000000
            </p>
          </div>
          <div>
            <ul className=" flex justify-evenly space-x-6" >
              <a href="#">
                <li>
                  <FontAwesomeIcon color="white" icon={faInstagram} />
                </li>
              </a>
              <a href="#">
                <li>
                  <FontAwesomeIcon color="white" icon={faFacebook} />
                </li>
              </a>
              <a href="#">
                <li>
                  <FontAwesomeIcon color="white" icon={faWhatsapp} />
                </li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </body>
  )
}