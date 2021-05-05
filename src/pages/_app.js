import '../styles/globals.css'
import '../styles/hero.css'
import '../styles/about.css'
import 'tailwindcss/tailwind.css'

import { CartProvider } from '../contexts/cartContext';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
        <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
