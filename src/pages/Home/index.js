import React from 'react'

import Logo from '../../assets/img/logo-loja.jpg'

import './style.css'

export default function Home(){
    return(
        <div className="home-container">
            <section className="titulo-app">
                <h1>Software de Gestão Comercial</h1>
            </section>
            <section className="logo-container">
                <img src={Logo} alt="Logomarca da loja"/>
            </section>
        </div>
    )
}