import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const CodigoPracticasEditores = () => {

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
                    <a className="text-slate-500 font-bold hover:text-slate-500">Código de ética y buenas prácticas editoriales</a>
                </Link>
            </li>
            
        </nav>

        <h1 className="font-bold text-3xl mb-10">Código de ética y buenas prácticas editoriales</h1>

        <hr className="mb-10"></hr>


        <p>La Revista Segmento fomenta que todos los involucrados en cualquier parte del proceso editorial, cumplan con lineamientos éticos y buenas prácticas durante todo el proceso editorial. Este conjunto de principios orientan la labor de publicación de la revista, por lo que deben ser conocidos y respetados por todas las personas que participan en las diferentes etapas.
Puede descargar el código de ética y buenas prácticas de la Revista Segmento haciendo CLIC AQUÍ. </p>
        

    </Layout>
    )
}

export default CodigoPracticasEditores