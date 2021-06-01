import React,{ useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Card from './Card';

import { storeItems } from '../data';

import { useRouter } from 'next/router';

const Products = () => {
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([])
    const inputEl = useRef('')


    const getSearch = async() => {
        setSearch(inputEl.current.value)
        if (search !== "") {
            const  newProductList =  storeItems.filter((product) => {
              return Object.values(product)
                    .join(" ")
                    .toLowerCase()
                    .includes(search.toLowerCase())
            })
            setSearchResults(newProductList)
        } else {
            setSearchResults(storeItems)
        }
    }



    let router = useRouter();
    let title = router.locale === 'pt-BR' ? 'Nossos Produtos' :
        router.locale === 'en-US' ? 'Our Products' :
            router.locale==='es' ? 'Nuestros Productos' :''

    let all = router.locale === 'pt-BR' ? 'Tudo' : router.locale === 'en-US' ? 'All' : router.locale === 'es' ? 'Tudo' : '';
    let cakes = router.locale === 'pt-BR' ? 'Bolos' : router.locale === 'en-US' ? 'Cakes' : router.locale === 'es' ? 'Bolos' : '';
    let breads = router.locale === 'pt-BR' ? 'Pães' : router.locale === 'en-US' ? 'Breads' : router.locale === 'es' ? 'Panes' : '';
    let candies = router.locale === 'pt-BR' ? 'Doces' : router.locale === 'en-US' ? 'Candies' : router.locale === 'es' ? 'Dulces' : '';
    let bakeds = router.locale === 'pt-BR' ? 'Assados' : router.locale === 'en-US' ? 'BakedGoods' : router.locale === 'es' ? 'Productos horneados' : '';
    
    return (
        <section id="products" className="h-auto  py-12 bg-gray-100">
            {/* product buttons */}
            <h1 className="text-center text-3xl md:text-4xl lg:text-5xl" style={{ color: 'rgb(239, 121, 152)' }} >{title}</h1>
            {/* <div className="flex flex-wrap justify-center space-x-2 md:space-x-8 mt-4" style={{ fontFamily: 'Montserrat' }}>
                <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-2 md:px-4">{all}</a>
                <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-2 md:px-4">{cakes}</a>
                <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-2 md:px-4">{breads}</a>
                <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white py-2 px-2 md:px-4">
                    {candies}
                </a>
                <a href="" className="btn bg-transparent border rounded hover:bg-pink-400 hover:text-white  py-2 px-2 md:px-4">
                    {bakeds}
                </a>
            </div> */}
            {/* search bar */}
            <div className="mt-4 flex justify-center">
                <span className="bg-white border rounded-r-none flex items-center justify-center w-10" >
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                    type="text"
                    name="search_bar"
                    ref={inputEl}
                    onChange={getSearch}
                    id="search_bar"
                    className="w-1/3 md:w-1/2 lg:w-1/3 h-8 border rounded rounded-l-none pl-2 " />
            </div>
            {/* items display */}
            <div className="flex justify-evenly flex-wrap h-auto w-11/12 lg:w-3/5 mx-auto pt-5 " >
                <Card products={ search.length<1 ? storeItems : searchResults  } />
            </div>
        </section>
    )
}

export default Products;