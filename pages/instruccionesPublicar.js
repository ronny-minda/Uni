import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const InstruccionesPublicar = () => {

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
                    <a className="text-slate-500 font-bold hover:text-slate-500">Instrucciones para publicar</a>
                </Link>
            </li>
            
        </nav>

        <h1 className="font-bold text-3xl mb-10">Instrucciones para publicar</h1>

        <hr className="mb-10"></hr>


        <p className="my-3">La <b>Revista Segmento</b> es editada por la Facultad de Comunicación Social (FACSO). Es una revista digital de carácter científico, que publica trabajos de investigación en el campo de LA COMUNICACIÓN, DISEÑO, PUBLICIDAD Y TURISMO, aparece en forma de un volumen anual compuesto por dos números semestrales.</p>
        <p className="my-3">El objetivo de la Revista Segmento, es la publicación y difusión de artículos realizados por investigadores, profesores, estudiantes, profesionales y expertos nacionales y extranjeros, en las áreas relacionadas a la comunicación.</p>
        <p className="my-3">En la Revista Segmento se reciben artículos que corresponden a:</p>
        <ol className="pl-10">
            <li className="my-3">1.	Artículos científicos originales e inéditos.</li>
            <li className="my-3">2.	Informes técnicos, normas o especificaciones.</li>
            <li className="my-3">3.	Ponencias o comunicaciones a congresos.</li>
            <li className="my-3">4.	Cartas al editor o artículos breves. </li>
            <li className="my-3">5.	Artículos de revisión o estados del arte.</li>
        </ol>

        <p className="my-3">Se especifican a continuación las normas de publicación.</p>

        <ol className="pl-10">
            <li className="my-3">1.	Los autores interesados en postular un artículo para su publicación en la Revista Segmento deben obligatoriamente revisar, con anticipación, las Políticas Editoriales de la Revista. El envío de artículos no implica obligatoriedad en su aceptación.</li>
            <li className="my-3">2.	Los trabajos deben ser <b>originales e inéditos</b> en idioma español. Para ello se utilizará la siguiente <Link href='/zzzzzzzzzzzzzzzzzzzz'><a className="text-cyan-500 hover:underline">declaración de originalidad y cesión de derechos.</a></Link></li>
            <li className="my-3">3.	<b>Generalidades.</b> La extensión de los trabajos debe oscilar <b>entre cinco y quince páginas</b> de 21,5 x 29,7 cm (8,26 x 11,69 pulgadas). Se debe presentar en un <b>documento de Microsoft Word,</b> con interlineado de 1,5 en una columna, en letra Arial 12 pts. Márgenes de 2,5 cm a todos los lados.</li>
            <li className="my-3">4.	Los archivos del artículo se deben enviar al correo electrónico: <b className="italic">revista.segmentof@ug.edu.ec</b> indicando en el espacio de asunto: Artículo para publicar.</li>
            <li className="my-3"><b>5.	Título del artículo.</b> Debe tener el menor número posible de palabras, no mayor a 20, y expresar el contenido real de la publicación. Además, el título también debe enviarse en idioma inglés.   </li>
            <li className="my-3"><b>6.	Autor(es).</b> En los artículos debe indicarse <b>por cada uno de los autores</b> lo siguiente: </li>
     
            <ol className="pl-10">
                <li className="my-3">1.	Nombre y apellido(s) del autor: usar el primer nombre y, opcionalmente, la inicial del segundo nombre. Por ejemplo, Luis Carlos pasaría a Luis C. En caso de contar con dos apellidos, estos deben ser unidos con un guión, por ejemplo Araya-Rojas. Se recomienda evitar partículas que unen nombres y apellidos, por ejemplo, Emilio de la Banda quedaría como Emilio Banda, sin embargo en el caso de mantenerlas, se deben incluir guiones: Emilio de-la-Banda. Es importante no incluir partículas que unen distintos nombres. Ejemplo: María del Mar Valero Ruiz quedaría como María M. Valero-Ruiz.</li>
                <li className="my-3">2.	Profesión, puesto o declaración de trabajador/investigador independiente. </li>
                <li className="my-3">3.	Nombre completo de la institución u organización de trabajo del autor así como la ciudad y país de origen de dicha entidad. </li>
                <li className="my-3">4.	Correo electrónico.</li>
                <li className="my-3">5.	ORCID. Se debe proporcionar el número <b>ORCID de autor</b>. Si no cuenta con uno puede crearlo en la página <a className="text-cyan-500" title="Linkedin" href="https://orcid.org" target="_blank" rel="noopener noreferrer">https://orcid.org/</a> </li>
                <li className="my-3">6.	En el caso de artículos con varios autores, se debe considerar en primera instancia al investigador que mayor porcentaje de trabajo aportó a la investigación y así sucesivamente con los otros autores. </li>
            </ol>
            
            <li className="my-3">7.	<b>Resumen.</b> El resumen debe abarcar entre 200 a 250 palabras. Debe contener en forma clara el objetivo de estudio, problema, los procedimientos o métodos utilizados y resumen de los resultados y conclusiones más relevantes de la investigación. El resumen siempre se debe presentar en español e inglés.</li>
            <li className="my-3">8.	<b>Palabras clave.</b> Se debe incluir palabras que identifiquen los temas estudiados en el artículo, se deben de presentar en español e inglés, <b>máximo cinco palabras</b>, separadas por punto y coma(;). </li>
            <li className="my-3">9.	Las fórmulas y ecuaciones matemáticas deben realizarse con el Editor de ecuaciones de Microsoft Office. En lo pertinente, se usará el Sistema Internacional de Unidades.  </li>
            <li className="my-3">10.	<b>Referencias Bibliográficas.</b> Todas las referencias bibliográficas deberán aparecer al final del documento de acuerdo con el APA 7</li>
            <li className="my-3">11.	<b>Imágenes, gráficos y tablas.</b> Las imágenes y figuras se deben enviar en un archivo <b>aparte del documento</b> de Microsoft Word con sus nombres respectivos. Los formatos permitidos son: .jpg, .tiff, .eps, .psd, .png y .ai. La resolución de cada una de las imágenes debe ser de <b>al menos 150 ppi.</b>  Las imágenes deben ser originales del autor o en su debido caso indicar los créditos al autor respectivo de la imagen. Se debe incluir <b>una imagen principal original</b> que refleje los resultados de la investigación realizada, dicha imagen se utilizará como portada del artículo y debe vanir en formato horizontal. Las imágenes, tablas y gráficos también deben estar incluidos dentro del documento de Microsoft Word. </li>
            <li className="my-3">12.	<b>Políticas Anti-plagio.</b> Durante el proceso editorial, todos los manuscritos sometidos a la Revista Segmento serán revisados con la herramienta de detección de plagio URKUN.</li>
            <li className="my-3">13.	<b>Arbitraje.</b> El autor del artículo adquiere el compromiso de <b>no enviarlo simultáneamente a otras instancias</b> para su publicación. El Comité Editorial somete a revisión los artículos y recomienda las modificaciones y correcciones que considere pertinentes o devolver los artículos que no cumplan con la calidad, originalidad y contenido.</li>
            <li className="my-3">14.	<b>Responsabilidades.</b> El Comité Editorial no se responsabiliza por las conclusiones a las que lleguen los autores como resultado de su investigación.</li>
            <li className="my-3">15.	La Comisión Editorial de Revista SEGMENTO no dará trámite de edición al artículo que incumpla con estos requisitos.</li>
            
        </ol>
        <li className="list-none">Puede descargar estas instrucciones para publicar haciendo <a className="text-cyan-500" title="Linkedin" href="https://orcid.org" target="_blank" rel="noopener noreferrer">CLIC AQUÍ.</a> </li>

    </Layout>
    )
}

export default InstruccionesPublicar