import React from "react";
import Link from 'next/link'

import Layout from "../components/layout";

const Login = () => {

    return (
        <Layout>
            <form 
            className="flex flex-col"
            onSubmit={ e => {
                e.preventDefault()
                console.log('sii')
            }}
            >
                <label className="flex flex-col my-5">
                    <span className="text-2xl my-3">Nombre Usuario</span>
                    <input className="h-11 rounded border shadow-inner focus:ring focus:ring-zinc-300 outline-none" placeholder="Nombre Usuario" type='text' />
                </label>

                <label className="flex flex-col my-5">
                    <span className="text-2xl my-3">Contraseña</span>
                    <input className="h-11 rounded border shadow-inner focus:ring focus:ring-zinc-300 outline-none" placeholder="Contraseña" type='text' />
                </label>
                
                <Link href='/'>
                    <a className="my-5">¿Has olvidado tu contraseña?</a>
                </Link>

                <input className="w-28 h-10 text-lg rounded active:bg-slate-400 bg-slate-300 cursor-pointer" type='submit' value='Enviar' />

            </form>
        </Layout>
    )
}

export default Login