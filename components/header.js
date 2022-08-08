import React, { useState } from "react";
import Link from 'next/link'

import LogoUGuayaquil from "../svg/logoiUGuayaquil";

const Header = () => {

    const [ menuDes, setMenuDes ] = useState(false);

    return (
        <header className="mb-20">
            <section className="bg-sky-300 flex justify-evenly border-b- border-neutral-600 ">
                <Link href='/'>
                    <a>
                        <LogoUGuayaquil className="h-12 my-3" /> 
                    </a>
                </Link>

                
                <Link href='/' >
                    <a className="flex items-center">
                    
                            <div className="bg-[url('../public/home_revistas.png')] h-7 w-7 "></div>
                            <h3 className="text-xs">Ir al Portal de Revistas</h3>
                        
                    </a>
                </Link>
            </section>
            

            <section className="border border-gray-300 shadow-lg flex justify-around items-center h-20 w-full my-1 bg-stone-200 rounded">

                <nav className="flex">
                    <li className="list-none mx-4">
                        <Link href='/login'>
                            <a className="bg-amber-500 px-4 py-2 active:bg-amber-400 rounded text-xs text-white hover:text-black">Login</a>
                        </Link>
                    </li>
                    <li className="list-none mx-4">
                        <Link href='/actual'>
                            <a className="text-xs text-gray-500 hover:text-black">Actual</a>
                        </Link>
                    </li>
                    <li className="list-none mx-4">
                        <Link href='/archivos'>
                            <a className="text-xs text-gray-500 hover:text-black">Archivos</a>
                        </Link>
                    </li>
                    <li className="list-none mx-4 relative">
                        <Link href='/'>
                            {/* onBlur={() => setMenuDes(false) } */}
                            <a className="text-xs text-gray-500 hover:text-black" onClick={ (e) => {
                                
                                e.preventDefault()
                                menuDes ? setMenuDes(false) : setMenuDes(true)

                            }}>Acerca de↓</a>
                        </Link>

                        {

                        menuDes && <ul className="bg-stone-100 w-32 absolute top-6 p-3 drop-shadow-md rounded">

                            <li>
                                <Link href='/comiteEditorial'>
                                    <a className="text-xs text-gray-500 hover:text-black" onClick={()=> setMenuDes(false)} >Comite Editorial</a>
                                </Link>
                            </li>
                            {/* <li>
                                <Link href='/propuestas'>
                                    <a className="text-xs text-gray-500 hover:text-black" onClick={()=> setMenuDes(false)} >Propuestas</a>
                                </Link>
                            </li> */}
                            <li>
                                <Link href='/contacto'>
                                    <a className="text-xs text-gray-500 hover:text-black" onClick={()=> setMenuDes(false)} >Contacto</a>
                                </Link>
                            </li>

                        </ul>

                        }
                    </li>
                    <li className="list-none mx-4">
                        <Link href='/cronograma'>
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