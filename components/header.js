import React, { useState } from "react";
import Link from 'next/link'

import LogoUGuayaquil from "../svg/logoiUGuayaquil";

const Header = () => {

    const [ menuDes, setMenuDes ] = useState(false);

    return (
        <header className="mb-8">
            <section className="bg-sky-300 flex justify-evenly border-b- border-neutral-600 ">
                <Link href='/'>
                    <a>
                        <LogoUGuayaquil className="h-12 my-3" /> 
                    </a>
                </Link>

                
                <Link href='/zzzzzzzz' >
                    <a className="flex items-center">
                    
                            <div className="bg-[url('../public/home_revistas.png')] h-7 w-7 "></div>
                            <h3 className="text-xs">Ir al Portal de Revistas</h3>
                        
                    </a>
                </Link>
            </section>

            <section className="shadow-lg flex justify-around items-center h-20 w-full my-1 bg-stone-200 rounded">

                <nav className="flex">
                    <li className="list-none mx-4">
                        <Link href='/'>
                            <a className="text-xs text-gray-500 hover:text-black">Actual</a>
                        </Link>
                    </li>
                    <li className="list-none mx-4">
                        <Link href='/'>
                            <a className="text-xs text-gray-500 hover:text-black">Archivos</a>
                        </Link>
                    </li>
                    <li className="list-none mx-4 relative">
                        <Link href='/'>
                            <a className="text-xs text-gray-500 hover:text-black" onBlur={() => setMenuDes(false) } onClick={ () => {
                                
                                menuDes ? setMenuDes(false) : setMenuDes(true)

                            }}>Acerca de↓</a>
                        </Link>

                        {

                        menuDes && <ul className="bg-stone-100 w-32 absolute top-6 p-3 drop-shadow-md rounded">

                            <li>
                                <Link href='/'>
                                    <a className="text-xs text-gray-500 hover:text-black">Comite Editorial</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className="text-xs text-gray-500 hover:text-black">Propuestas</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/'>
                                    <a className="text-xs text-gray-500 hover:text-black">Contacto</a>
                                </Link>
                            </li>

                        </ul>

                        }
                    </li>
                    <li className="list-none mx-4">
                        <Link href='/'>
                            <a className="text-xs text-gray-500 hover:text-black">Cronograma de la Revista</a>
                        </Link>
                    </li>
                </nav>

                <form className="flex" onSubmit={ e => {
                    e.preventDefault()
                    console.log('submit')
                } }>

                    <input type='text' className="rounded shadow-inner focus:ring focus:ring-zinc-300 outline-none"></input>
                    <button className="bg-slate-300 mx-1 text-xs px-2 py-1 active:bg-slate-400 rounded">BUSCAR</button>
                
                </form>
                

            </section>
            
        </header>
    )
}

export default Header