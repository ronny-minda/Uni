import React from "react";

import Header from '../components/header'
import Footer from '../components/footer'
import Aside from "./aside";

const Layout = ({children}) => {

    return (
        <>
            <Header />
            
            <main className='flex max-w-6xl m-auto ' >

                <section className=' flex flex-col w-8/12 mr-5'>
                    {children}
                </section>
                
                <Aside />

            </main>

            <Footer />
        </>
    )
}

export default Layout