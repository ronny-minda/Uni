import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Layout from '../components/layout'
import Aside from '../components/aside'
import VerArticulo from '../components/verArticulo'




const Home = () => {

  return (

      <Layout>
        

            <Image 
              src='/imgPrincipal.jpeg'
              alt="Picture of the author"
              width='100%'
              height={50}
              layout='responsive'
              objectFit='contain'
              loading="lazy"
            />

            <p >La Revista IDI+ es una publicación electrónica de carácter científico de la Escuela de Diseño Industrial del Tecnológico de Costa Rica. Es una revista semestral que publica dos números al año, el primer número se publica en junio y abarca julio-diciembre, mientras que el segundo se publica en diciembre y abarca enero-junio. Es gratuita y de acceso abierto, cuyo propósito es divulgar trabajos inéditos de investigación en el campo del diseño industrial y áreas afines. Está dirigida a investigadores, profesores, estudiantes, profesionales y expertos nacionales o extranjeros en el área del diseño y otros campos relacionados.</p>

            <h3 className='text-3xl'>Numero actual</h3>

            <hr className='my-5'></hr>

            <h4 className='text-base mb-10'>Vol. 5 Núm. 1 (2022): Revista IDI+ Volumen 5 Número 1 (2022)</h4>

            <VerArticulo />

      </Layout>


  )
}


// junio a disienbre 2020


export default Home