import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Layout from '../components/layout'
import Aside from '../components/aside'
import VerArticulo from '../components/verArticulo'





const Home = () => {

  return (

      <Layout ver={true}>
        {/* asdfasdfas */}
            <Image
              src='/imgPrincipal.jpg'
              alt="Picture of the author"
              width='100%'
              height={50}
              layout='responsive'
              objectFit='contain'
              loading="lazy"
            />

           <p className='text-justify mb-4'>La <b>Revista SEGMENTO</b> es una publicación electrónica de carácter científico de la FACULTAD DE COMUNICACIÓN DE LA UNIVERSIDAD DE GUAYAQUIL . Es una revista <b>semestral que publica dos números al año</b>, el primer número se publica en junio y abarca enero a mayo, mientras que el segundo se publica en diciembre y abarca julio a noviembre. <b>Es gratuita y de acceso abierto</b>, cuyo propósito es divulgar trabajos inéditos de investigación en el campo de la comunicación, diseño, publicidad y turismo o áreas afines. Está dirigida a investigadores, profesores, estudiantes, profesionales y expertos nacionales o extranjeros en el área de la comunicación y otros campos relacionados.</p>
            <h3 className='text-3xl'>Numero actual</h3>

            <hr className='my-5'></hr>

            <h4 className='text-base mb-10'>Vol. 1 Núm. 1 (2020): Revista Segmento Volumen 1 Número 1 (2020)</h4>

            <VerArticulo />

      </Layout>


  )
}


// junio a disienbre 2020


export default Home