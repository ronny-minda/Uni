import React from "react";
import Image from "next/image";
import Link from 'next/link'

import Layout from "../components/layout";

const ComiteEditorial = () => {

    let array=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]

    return (
        <Layout>

            <h1 className="font-bold text-3xl text-slate-700">Comite Editorial</h1>
            
            <hr className="my-7"></hr>
            
            {
                    
                    array.map((e) => {
                        

                    return <div key={e.id} className=" h-auto flex border rounded p-2 my-3">

                        <div className="h-full w-52">
                            <Image
                                src='/perfilA.jpg'
                                alt="Picture of the author"
                                width='100%'
                                height='100%'
                                layout='responsive'
                                objectFit='contain'
                                loading="lazy"
                            />
                        </div>
                        
                        <div className="flex flex-col">
                          
                            <h2 className="text-base font-bold text-slate-700 hover:text-slate-400">Director/Editor</h2>
                            <h3 className="text-base font-bold text-slate-700 hover:text-slate-400">David Strasser</h3>
                    
                            
                            <span className="text-sm text-slate-500">Instituto Tecnológico de Costa Rica</span>
                            <span className="text-sm text-slate-500">Escuela de Diseño Industrial.</span>
                            <span className="text-sm text-slate-500">Campus Tecnológico Central Cartago, Costa Rica.</span>
                            <span className="text-sm text-slate-500">lcaraya@tec.ac.cr</span>
                            <span className="text-sm text-slate-500">(+506) 2550 9491</span>
                        </div>
                        

                    </div>

                    
                    })

                }

        </Layout>
    )
}

export default ComiteEditorial