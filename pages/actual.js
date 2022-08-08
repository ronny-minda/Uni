import Link from "next/link";
import React from "react";

import Layout from "../components/layout";
import VerArticulo from "../components/verArticulo";

const Actual = () => {

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
                        <a className="font-bold hover:text-slate-500">Archivos</a>
                    </Link>
                </li>
                <span className="mx-3"> {'>'} </span>
                <li className="list-none text-slate-600">Vol. 5 Núm. 1 (2022): Revista IDI+ Volumen 5 Número 1 (2022)</li>
            </nav>


            <VerArticulo />

        </Layout>
    )
}

export default Actual