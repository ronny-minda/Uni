import Link from "next/link";
import React from "react";


import LogoUGuayaquil from "../svg/logoiUGuayaquil";
import LogoFacso from "../svg/logoFacso";

const Footer = (
    
) => {




    return (

        <footer className="bg-slate-400 mt-10 flex justify-evenly items-center h-auto ">
            
            <span className="flex flex-col my-9">


                
                <hr className="my-4"></hr>

                <span>Revista Segmento</span>
                <span>Email: revista.segmentof@ug.edu.ec</span>

                <span>Dirección: Cdla Quisquis Calle Eugenio Espejo E/Hector Toscano y A. Romero Castillo</span>

                <span>Telf.:04-2452127</span>

                <h3 className="font-bold text-lg mt-5">Contacto principal</h3>

                <span>Lcdo. David Strasser L MSc.</span>
                <span>david.strasserl@ug.edu.ec</span>

                <span>Telef. 0999962675</span>
            
            </span>

            <div>
                <span className="h-10 w-10">

                    <Link href='/'>
                        <a className="">
                            <LogoUGuayaquil className='h-12' />
                        </a>
                    </Link>

                </span>
                
                <span className="h-10 w-10">

                    <Link href='/'>
                        <a>
                            <LogoFacso className='h-12' />
                        </a>
                    </Link>

                </span>
            </div>

            
        </footer>
    )
}

export default Footer