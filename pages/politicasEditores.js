import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const PoliticasEditores = () => {

    return (
        <Layout>
            <h1 className="text-4xl">Políticas Editoriales</h1>

            <hr className="my-6"></hr>

            <h2 className="font-bold">Políticas de Acceso Abierto y reuso</h2>

            <p className="my-5">La Revista Segmento  sigue los principios del movimiento internacional de <b>Acceso Abierto</b> establecidos en la Declaración de Budapest. En la cual se establece que no existirá nunguna barrera tecnológica ni económica para acceder a los contenidos de la revista. Es decir, garantiza el derecho gratuito, irrevocable y mundial de acceder a la información, así como copiarlo, usarlo, distribuirlo, transmitirlo, exhibirlo, realizar copias impresas para uso personal, hacer adaptaciones y derivados así como su distribución respectiva, con los reconocimientos adecuados a la autoría. Además, brinda acceso a una versión completa del documento y sus materiales complementarios con indicación del permiso para su uso en formato electrónico y su depósito en los repositorios institucionales, académicos o gubernamentales.</p>

            <h3 className="font-bold">Derechos de autor</h3>

            <div className="bg-[url('../public/DerechoAutor.png')] bg-no-repeat my-5 h-16 w-40 bg-contain"></div>

            <p>Todos los artículos están licenciados bajo  <a className="text-cyan-500" title="Linkedin" href="https://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank" rel="noopener noreferrer">licencia de Creative Commons Reconocimiento-NoComercial-SinObraDerivada 4.0 Internacional.</a></p>


            <p className="my-5">Los autores conservan los derechos de autor y ceden a la Revista Segmento el derecho de la primera publicación, además de que pueda editarlo, reproducirlo, distribuirlo, exhibirlo y comunicarlo en Ecuador y el extranjero mediante medios impresos y electrónicos.  Asimismo, los autores asumen el compromiso sobre cualquier litigio o reclamación relacionada con derechos de propiedad intelectual, exonerando de responsabilidad a la Facultad de Comunicación y la Revista Segmento. Además, se establece que los autores pueden eventualmente realizar otros acuerdos contractuales independientes y adicionales para la distribución no exclusiva de la versión del artículo publicado en esta revista (p. ej., incluirlo en un repositorio institucional o publicarlo en un libro) siempre que indiquen claramente que el trabajo se publicó por primera vez en esta revista.</p>

            <h3 className="font-bold mb-5">Políticas Anti-plagio</h3>

            <p className="mb-5">Durante el proceso editorial, todos los manuscritos sometidos a la Revista Segmentoserán revisados con la herramienta de detección de plagio URKUND, su enlace es : https://www.urkund.com/es/inicio-de-sesion/.</p>
            <p className="mb-5">La revisión realizada hace una comparación textual del documento y su base de datos (que incluye bases de datos internacionales) para luego generar un informe de similitud. Cada caso se evaluará de manera particular y se hará mayor énfasis en los casos que incurran con más de 15% de similitud. Se notificará a los autores la situación del informe para ver la posibilidad de hacer las correcciones (en caso de ausencia de citas) o el rechazo del manuscrito, en caso que se detecte una conducta de plagio intencional. </p>
            <p className="mb-5">Adicionalmente, todos los manuscritos son sometidos a la revisión por pares, donde los evaluadores indican el grado de originalidad y calidad de los documentos evaluados.</p>

            <h3 className="font-bold mb-5">Políticas de Preservación Digital</h3>

            <p className="mb-5">La Revista Segmento preserva sus archivos finales (PDF y EPUB) y editables (InDesign) en una nube de DRIVE, además de respaldar la información en un disco duro físico custodiado por el Comité Editorial. Además se realiza una publicación en la plataforma ISSUU. </p>

            <h3 className="font-bold mb-5">Código de ética y buenas prácticas editoriales</h3>

            <p className="mb-5">La Revista Segmento fomenta que todos los involucrados en cualquier parte del proceso editorial, cumplan con lineamientos éticos y buenas prácticas durante todo el proceso editorial. Este conjunto de principios orientan la labor de publicación de la revista, por lo que deben ser conocidos y respetados por todas las personas que participan en las diferentes etapas.</p>
            
            <p className="mb-5">Puede descargar el código de ética y buenas prácticas de la Revista Segmento haciendo CLIC AQUÍ. </p>


        </Layout>
    )
}

export default PoliticasEditores