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
                        <a className="text-slate-500 font-bold hover:text-slate-500">Información para lectores/as</a>
                    </Link>
                </li>
                
            </nav>

            <h1 className="font-bold text-3xl mb-10">Información para lectores/as</h1>


            <p>Animamos a los lectores/as a registrarse en el servicio de notificación de publicaciones de la revista. Utilice el enlace <Link href='/login'><a className="font-bold text-cyan-500 hover:underline">Registro</a></Link> de la parte superior de la página de inicio de la revista. Como resultado del registro, el lector/a recibirá por correo electrónico la Tabla de contenidos de cada número de la revista. Esta lista también permite que se le atribuya a la revista un cierto nivel de apoyo o número de lectores/as. Consulte la Declaración de privacidad de la revista, que garantiza a los lectores/as que sus nombres y direcciones de correo electrónico no se usarán con otros fines.</p>

        </Layout>
    )
}

export default ParaLectores