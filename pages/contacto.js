import React from "react";

import Layout from "../components/layout";

const Contacto = () => {

    return (
        <Layout>

            <h1 className="font-bold text-3xl text-slate-700">Contacto</h1>
            
            <hr className="my-4"></hr>

            <span>Entidad Editora</span>
            <span>Instituto Tecnológico de Costa Rica.</span>
            <span>Campus Tecnológico Central Cartago.</span>
            <span>Escuela de Diseño Industrial.</span>
            <span>Dirección: Cartago, Cartago, Calle 15, Avenida 14, 1 km Sur de la Basílica de Los Ángeles.</span>
            <span>Apartado Postal: 159-7050</span>
            <span>Página web: www.tec.ac.cr</span>

            <h3 className="font-bold text-lg mt-5">Contacto principal</h3>

            <span>IDI. Luis Carlos Araya Rojas, M.Ed.</span>
            <span>Instituto Tecnológico de Costa Rica. Escuela de Diseño Industrial. Campus Cartago.</span>
            <span>Teléfono (+506) 2550-9491</span>
            <span>lcaraya@itcr.ac.cr</span>



            <h3 className="font-bold text-lg mt-5">Contacto de soporte</h3>

            <span>DI. Xinia Varela Sojo, MDS.</span>
            <span>Teléfono (+506) 2550-2096</span>
            <span>xvarela@itcr.ac.cr</span>


        </Layout>
    )
}

export default Contacto