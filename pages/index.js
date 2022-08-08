import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'


import Layout from '../components/layout'
import Facebook from '../svg/facebook'
import Instagran from '../svg/instagran'




const Home = () => {

  return (
    <>
      <Layout>
        
        <main className='flex max-w-6xl m-auto ' >
          
          <section className=' flex flex-col w-8/12 mr-5'>
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

            <div className='flex'>
              <div className='h-auto w-2/4 border mx-5'>
              <Link href='/' >
                <a>
                  <Image
                    src='/portada.jpg'
                    alt="Picture of the author"
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='contain'
                    loading="lazy"
                  />
                </a>
              </Link>
              </div>
  
              <section className='w-2/4'>
                <p>Revista IDI+ Volumen 5 Número 1 (2022)</p>
                <p><b>Publicado:</b> 30-06-2022</p>
              </section>
              
            </div>

            <p className='text-2xl font-bold my-5'>Número completo</p>

            <hr></hr>

            <Link href='/'>
              <a className=''>
                <p className='text-xl hover:text-slate-500 hover:underline'>Revista IDI+ Volumen 5. Número 1. 2022</p>
              </a>
            </Link>

            <p>1-16</p>

            <div>
              <button className='h-10 w-14 m-1 hover:bg-slate-600 rounded text-white bg-slate-700'>PDF</button>
              <button className='h-10 w-14 m-1 hover:bg-slate-600 rounded text-white bg-slate-700'>EPUB</button>
            </div>

            <button className='h-10 w-60 m-1 hover:bg-slate-600 rounded text-white bg-slate-700'>VER TODOS LOS NUMEROS</button>


          </section>


          <aside className='h-40 w-4/12 ml-5'>

            <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg mb-3'>
              <h2 className='text-center text-2xl bg-slate-200 rounded-t py-2 mb-4'>Información</h2>

              <hr className='mx-6'></hr>

              <ul className='my-3'>
                <li>
                  <Link href='/'>
                    <a className='p-6 hover:underline hover:text-slate-400'>Para lectores/as</a>
                  </Link>
                </li>
              </ul>

              <hr className='mx-6'></hr>

              <ul className='my-3'>
                <li>
                  <Link href='/'>
                    <a className='pl-6 hover:underline hover:text-slate-400'>Para autores/as</a>
                  </Link>
                </li>
              </ul>

              <hr className='mx-6'></hr>
              
              <ul className='my-3'>
                <li>
                  <Link href='/'>
                    <a className='pl-6 hover:underline hover:text-slate-400'>Para bibliotecarios/as</a>
                  </Link>
                </li>
              </ul>

              <hr></hr>

            </div>

            <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg my-6'>

              <h3 className='px-4 text-gray-600 font-bold text-xl my-3'>Información para autores</h3>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Políticas Editoriales</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Código de ética y buenas prácticas editoriales</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Instrucciones para publicar</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Proceso Editorial</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Normas IEEE</a>
                </Link>
              </p>


              <h3 className='px-4 text-gray-600 font-bold text-xl my-3'>Información de la Revista</h3>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Comité Editorial Interno</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Comité Científico Internacional</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Comité Científico Internacional</a>
                </Link>
              </p>

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Cronograma</a>
                </Link>
              </p>
              
              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Indexaciones</a>
                </Link>
              </p>
              

              <p>
                <Link href='/'>
                  <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Estadísticas</a>
                </Link>
              </p>

            </div>

            <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg my-6'>
              
              <h4 >Redes Sociales</h4>

              <div className='flex justify-center'>
                <Link href='/'>
                  <a className='h-auto w-auto'>
                    <Facebook />
                  </a>
                </Link>

                <Link href='/'>
                  <a className='h-auto w-auto'>
                    <Instagran />
                  </a>
                </Link>
              
              </div>

            </div>

            




            <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg mb-3'>
              <h2 className='text-center text-2xl bg-slate-200 rounded-t py-2 mb-4'>Idioma</h2>

              <hr className='mx-6'></hr>

              <ul className='my-3'>
                <li>
                  <Link href='/'>
                    <a className='p-6 hover:underline hover:text-slate-400'>Español</a>
                  </Link>
                </li>
              </ul>

              <hr className='mx-6'></hr>

              <ul className='my-3'>
                <li>
                  <Link href='/'>
                    <a className='pl-6 hover:underline hover:text-slate-400'>English</a>
                  </Link>
                </li>
              </ul>

              <hr className='mx-6'></hr>

            </div>
            

          </aside>
        </main>

      </Layout>
    </>

  )
}


// julio a disienbre 2020

export default Home