import { useRouter } from 'next/router';

 const About = () => {
    let router = useRouter()

    let abouteName = router.locale === 'pt-BR' ? 'Quem Somos' :
        router.locale === 'en-US' ? 'About Us' :
        router.locale === 'es' ? 'Quienes Somos' : '';

     let aboutText = router.locale === 'pt-BR' ? 'Dona Chica Delicatessen presente em vários momentos do seu dia-a-dia, escolha o seu tempo para desfrutar de uma cozinha generosa e muito atual. Nos primeiros raios de sol, você não trocará de lugar para se beneficiar de um maravilhoso café da manhã, por nossa e sua felicidade. Sozinho, com família ou em grupo, não importa o que traga você a Dona Chica, o importante é a certeza de que nossa equipe atenciosa lhe dará as boas-vindas mais agradáveis. E quem sabe voltará a provar, um pouco de nostalgia em seu coração, da cozinha caseira. Entre e sinta-se em casa.' :
        router.locale === 'en-US' ? 'Dona Chica Delicatessen present at various times in her day-to-day life, choose your time to enjoy generous and very up-to-date cuisine. In the first rays of the sun, you will not change places to benefit from a wonderful breakfast, for ours and your happiness. Alone, with family or in a group, no matter what you bring to Dona Chica, the important thing is the certainty that our attentive staff will give you the most pleasant welcome. And who knows, maybe you will taste again, a little nostalgia in your heart, of home cooking. Come in and make yourself at home.' :
        router.locale === 'es' ? 'Dona Chica Delicatessen presente en varios momentos de su día a día, elige tu momento para disfrutar de una cocina generosa y muy actual. En los primeros rayos del sol, no cambiarás de lugar para beneficiarte de un maravilloso desayuno, para los nuestros y tu felicidad. Solo, en familia o en grupo, no importa lo que traigas a Dona Chica, lo importante es la certeza de que nuestro atento personal te dará la más grata bienvenida. Y quién sabe, quizás vuelvas a saborear, un poco de nostalgia en tu corazón, de la cocina casera. Entra y siéntete como en casa.' :
        '';



    return (
        <section id="about" className="flex flex-col md:flex-row w-100 justify-center">
            <div className="flex lg:flex-row  md:flex-col md:space-y-6  md:w-11/12 p-10 md:py-10 items-center justify-center md:space-x-32 md:order-2 ">
                <div className="flex flex-col w-auto h-96 md:h-auto lg:w-96 space-y-3 ">
                    <h1 className="text-center text-3xl md:text-4xl" style={{ color: 'rgb(239, 121, 152)' }} >{abouteName}</h1>
                    <p className="text-justify text-sm md:text-xl text-gray-800 md:mx-0">
                       {aboutText}
                    </p>
                </div>
                <div className="about-img hidden md:flex md:order-1 ">
                    <img src="/us.jpeg" width="600" alt="our employess" />
                </div>
            </div>
        </section>
    )
 }

export default About;