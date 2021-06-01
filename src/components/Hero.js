import { useRouter } from 'next/router';

const Hero = () => {
    let router = useRouter();

    let title = router.locale === 'pt-BR' ? 'Bem vindo a' :
        router.locale === 'en-US' ? 'Welcome to' :
        router.locale === 'es' ? 'Bienvenido a':''

    return (
        <>
            <section className="flex  justify-center banner">
                <div className="flex justify-center items-center w-full" style={{ backgroundColor:'rgba(183, 127, 85, .3)'}} >
                    <h1 className="text-2xl md:text-6xl font-roboto"
                        style={{
                            textShadow: '1px 2px #ffffff',
                            color:'#ebd0b3'
                        }}
                    >
                        {title} <strong className="text-3xl md:text-7xl" style={{ color:'#ef7998'}} >Dona Chica</strong>
                        </h1>
                </div>
            </section>
        </>
    )
}

export default Hero;

