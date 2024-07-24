import React from 'react'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default function Layout({children}){
    return (
        <div className='site-wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}