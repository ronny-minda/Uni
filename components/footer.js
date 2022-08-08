import Link from "next/link";
import React from "react";

import LogoUGuayaquil from "../svg/logoiUGuayaquil";

const Footer = () => {

    return (
        <footer className="bg-stone-200 mt-10 flex justify-evenly items-center h-52 ">
            
            <span className="">

                <span className="font-bold">Dirección OAI-PMH: </span>
                <Link href='/'>
                    <a className=" hover:underline hover:text-slate-500">https://revistas.tec.ac.cr/index.php/idi/oai</a>
                </Link>
            
            </span>

            <span className="h-10 w-10">

                <Link href='/'>
                    <a>
                        <LogoUGuayaquil className='h-12' />
                    </a>
                </Link>

            </span>
        </footer>
    )
}

export default Footer