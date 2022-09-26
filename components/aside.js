import React from "react";
import Link from 'next/link'

import { useRouter } from 'next/router'

import Facebook from '../svg/facebook'
import Instagran from '../svg/instagran'
import Issuu from "../svg/issuu";
import Atom from "../svg/atom";
import Rss10 from "../svg/rss10_logo";
import Rss20 from "../svg/rss20";


const Aside = () => {

    const router = useRouter()

    return (

        <aside className='w-4/12 ml-5'>

        {
            router.pathname == '/' ?
            (

            <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg mb-3 flex flex-col items-center'>

                <h4 className="my-1 text-2xl">numero actual</h4>

                <div className="mt-1 mb-4 ">
                    <div className="my-1">
                        <Atom />
                    </div>

                    <div className="my-1">
                        <Rss10 />
                    </div>

                    <div className="my-1">
                        <Rss20 />
                    </div>
                </div>

            </div>

            ) : null
            
        }#++++

         

        <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg mb-3'>
        <h2 className='text-center text-2xl bg-slate-200 rounded-t py-2 mb-4'>Información</h2>

        <hr className='mx-6'></hr>

        {/* <ul className='my-3'>
            <li>
            <Link href='/envios'>
                <a className='p-6 hover:underline hover:text-slate-400'>envios</a>
            </Link>
            </li>
        </ul> */}

        <ul className='my-3'>
            <li>
            <Link href='/paraLectores'>
                <a className='p-6 hover:underline hover:text-slate-400'>Para lectores/as</a>
            </Link>
            </li>
        </ul>

        <hr className='mx-6'></hr>

        <ul className='my-3'>
            <li>
            <Link href='/paraAutores'>
                <a className='pl-6 hover:underline hover:text-slate-400'>Para autores/as</a>
            </Link>
            </li>
        </ul>

        <hr className='mx-6'></hr>
        
        <ul className='my-3'>
            <li>
            <Link href='/paraBibliotecarios'>
                <a className='pl-6 hover:underline hover:text-slate-400'>Para bibliotecarios/as</a>
            </Link>
            </li>
        </ul>

        <hr></hr>

        </div>

        <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg my-6'>

        <h3 className='px-4 text-gray-600 font-bold text-xl my-3'>Información para autores</h3>

        <p>
            <Link href='/politicasEditores'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Políticas Editoriales</a>
            </Link>
        </p>

        <p>
            <Link href='/codigoPracticasEditores'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Código de ética y buenas prácticas editoriales</a>
            </Link>
        </p>

        <p>
            <Link href='/instruccionesPublicar'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Instrucciones para publicar</a>
            </Link>
        </p>

        <p>
            <Link href='/lineasInvestigacionFacso'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Lineas de investigacion Facso</a>
            </Link>
        </p>

        <p>
            <Link href='/'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Proceso Editorial</a>
            </Link>
        </p>

        <p>
            <Link href='/normasApa7'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Normas APA 7</a>
            </Link>
        </p>


        <h3 className='px-4 text-gray-600 font-bold text-xl my-3'>Información de la Revista</h3>

        <p>
            <Link href='/comiteEditorialInterno'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Comité Editorial</a>
            </Link>
        </p>

        <p>
            <Link href='/comiteCientificoInterno'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Comité Científico</a>
            </Link>
        </p>

        {/* <p>
            <Link href='/comiteCientificoInternacional'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Comité Científico Internacional</a>
            </Link>
        </p> */}

        <p>
            <Link href='/cronograma'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Cronograma</a>
            </Link>
        </p>
        
        <p>
            <Link href='/indexaciones'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Indexaciones</a>
            </Link>
        </p>
        

        <p>
            <Link href='/estadisticas'>
            <a className='px-4 text-gray-600 hover:text-gray-400 my-3 hover:underline text-sm'>Estadísticas</a>
            </Link>
        </p>

        </div>

        <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg my-6'>
        
        <h4 className='px-4 text-gray-600 font-bold text-xl my-3' >Redes Sociales</h4>

        <div className='flex justify-center'>
            <Link href='/'>
            <a className='h-auto w-auto m-2'>
                <Facebook />
            </a>
            </Link>

            <Link href='/'>
            <a className='h-auto w-auto m-2'>
                <Instagran />
            </a>
            </Link>

            <Link href='/'>
            <a className='h-auto w-auto m-2'>
                <Issuu />
            </a>
            </Link>
        
        </div>

        </div>




        <div className='h-auto w-full bg-slate-50 rounded border border-slate-300 shadow-lg mb-3'>
        <h2 className='text-center text-2xl bg-slate-200 rounded-t py-2 mb-4'>Idioma</h2>

        <hr className='mx-6'></hr>

        <ul className='my-3 cursor-pointer'>
            <li>
            {/* <Link href='/'> */}
                <a className='p-6 hover:underline hover:text-slate-400'>Español</a>
            {/* </Link> */}
            </li>
        </ul>

        <hr className='mx-6'></hr>

        <ul className='my-3 cursor-pointer'>
            <li>
            {/* <Link href='/'> */}
                <a className='pl-6 hover:underline hover:text-slate-400'>English</a>
            {/* </Link> */}
            </li>
        </ul>

        <hr className='mx-6'></hr>

        </div>
        


        </aside>

        
            

    )
}

export default Aside