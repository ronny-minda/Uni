import React from "react";
import Link from 'next/link'
import Image from "next/image";

const VerArticulo = () => {

    return (
        <>
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
                <p>Revista Segmento Volumen 1 Número 1 (2020)</p>
                <p><b>Publicado:</b> 30-06-2020</p>
              </section>
              
            </div>

            <p className='text-2xl font-bold my-5'>Número completo</p>

            <hr></hr>

            <Link href='/'>
              <a className=''>
                <p className='text-xl hover:text-slate-500 hover:underline'>Revista Segmento Volumen 1. Número 1. 2020</p>
              </a>
            </Link>

            <p>1-16</p>

            <div>
              <button className='text-center h-10 w-14 m-1 hover:bg-slate-600 rounded text-white bg-slate-700'>PDF</button>
              <button className='text-center h-10 w-14 m-1 hover:bg-slate-600 rounded text-white bg-slate-700'>EPUB</button>
            </div>

            <button className='text-center h-10 w-60 m-1 hover:bg-slate-600 rounded text-white bg-slate-700'>VER TODOS LOS NUMEROS</button>
        </>
    )
}

export default VerArticulo