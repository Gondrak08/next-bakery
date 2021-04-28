
const Hero = () => {
    return (
        <>
            <div className="flex justify-center banner">
                <div className="flex justify-center items-center w-full" style={{ backgroundColor:'rgba(183, 127, 85, .3)'}} >
                    <h1 className="text-2xl md:text-6xl font-roboto"
                        style={{
                            textShadow: '1px 2px #ffffff',
                            color:'#ebd0b3'
                        }}
                    >
                        Bem vindo a <strong className="text-3xl md:text-7xl" style={{ color:'#ef7998'}} >Dona Chica</strong>
                        </h1>
                </div>
            </div>
        </>
    )
}

export default Hero;

