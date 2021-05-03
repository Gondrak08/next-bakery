import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { useRouter } from 'next/router';

const Footer = () => {
    let router = useRouter();
    let street = router.locale === 'pt-BR' ? 'Rua' : router.locale === "en-US" ? 'Street' : router.locale === 'es' ? 'Camino' : ''
    let number = router.locale === 'pt-BR' ? 'Número' : router.locale === 'en-US' ? 'Number' : router.locale === 'es' ? 'Número' : '';
    return (
        <footer className="bg-black h-10">
            <div className="flex justify-between items-center h-full mx-3 md:mx-32">
                <div className="flex text-white  text-xs md:text-sm md:space-x-3">
                    <p className="text-white">
                        Dona Chica
                    </p>
                    <p>
                        {street}: Albetro Antunes. {number}: 0000000
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
    )
}

export default Footer;