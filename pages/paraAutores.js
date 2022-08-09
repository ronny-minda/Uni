import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const ParaLectores = () => {

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
                    <Link href='/paraLectores'>
                        <a className="text-slate-500 font-bold hover:text-slate-500">Información para autores/as</a>
                    </Link>
                </li>
                
            </nav>

            <h1 className="font-bold text-3xl mb-10">Información para autores/as</h1>

            <p>¿Está interesado en publicar en la revista? Se recomienda revisar la página Acerca de la revista para consultar las políticas de sección de la revista, así como las Directrices del autor/a. Los autores/as deben <Link href='/login'><a className="font-bold text-cyan-500 hover:underline">registrarse</a></Link> en la revista antes de publicar o, si ya están registrados, pueden simplemente iniciar sesión y comenzar el proceso de cinco pasos.</p>

        </Layout>
    )
}

export default ParaLectores