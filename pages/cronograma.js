import React from "react";
import Link from 'next/link'
import Image from "next/image";

import Layout from "../components/layout";


const Cronograma = () => {

    return (
        <Layout>
            <h1>Cronograma</h1>
            {/* <h1 className="font-bold text-2xl text-slate-700">Cronograma de Revista</h1>
            
            <hr className="my-7"></hr>
            
            <Image 
              src='/cronograma.png'
              alt="Picture of the author"
              width='100%'
              height={50}
              layout='responsive'
              objectFit='contain'
              loading="lazy"
            />

            <span className="font-bold text-slate-700 mt-6">Última Actualización: Julio 2022</span> */}
        </Layout>
    )
}

export default Cronograma