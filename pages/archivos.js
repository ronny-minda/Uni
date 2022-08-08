import React from "react";
import Link from 'next/link'
import Image from "next/image";

import Layout from "../components/layout";


const Archivos = () => {

    let array=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]

    return (
        <Layout>

            <nav className="flex flex-wrap bg-slate-200 rounded py-2 px-5 mb-10 drop-shadow-lg border border-slate-300">
                <li className="list-none">
                    <Link href='/'>
                        <a className="font-bold hover:text-slate-500">Inicio</a>
                    </Link>
                </li>
                <span className="mx-3"> {'>'} </span>
                
                <li className="list-none">
                    <Link href='/'>
                        <a className="text-slate-500 font-bold hover:text-slate-500">Archivos</a>
                    </Link>
                </li>
                
            </nav>

            <section className="">
                

                
                {
                    
                    array.map((e) => {
                        

                    return <div key={e.id} className=" h-auto flex border rounded p-2 my-3">

                        <div className="h-full w-52">
                            <Image
                                src='/portada.jpg'
                                alt="Picture of the author"
                                width='100%'
                                height='100%'
                                layout='responsive'
                                objectFit='contain'
                                loading="lazy"
                            />
                        </div>
                        
                        <div>
                            <h2>
                                <Link href='/actual'>
                                    <a className="text-xl font-bold text-slate-700 hover:text-slate-400">Revista IDI+ Volumen 5 Número 1 (2022)</a>
                                </Link>
                            </h2>
                            
                            <span className="text-slate-500">Vol. 5 Núm. 1 (2022)</span>
                        </div>
                        

                    </div>

                    
                    })

                }

            </section>

        </Layout>
    )
}

export default Archivos