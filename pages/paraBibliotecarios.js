import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const ParaBiblioptecario = () => {

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
                    <Link href='/paraBiblioptecario'>
                        <a className="text-slate-500 font-bold hover:text-slate-500">Información para bibliotecarios/as</a>
                    </Link>
                </li>
                
            </nav>

            <h1 className="font-bold text-3xl mb-10">Información para bibliotecarios/as</h1>

            <p>Se recomienda a los investigadores/as bibliotecarios/as que incluyan esta revista en su listado de revistas electrónicas. Asimismo, cabría destacar que el sistema de publicación de código abierto de esta revista es apto para bibliotecas con personal docente que desee editar sus propias revistas (ver Open Journal Systems).</p>

        </Layout>
    )
}

export default ParaBiblioptecario