import React, { useState } from 'react';
import api from '../../../services/api'
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

import './style.css'

import CarrinhoCompras from '../../../assets/img/carrinho-de-compras.png'

export default function NovoCliente() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo, setSexo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')

    const navegacao = useNavigate();

    async function executarCadastro(e){
        e.preventDefault();
        
        const dados = {
            nome,
            sobrenome,
            cpf,
            sexo,
            endereco,
            cidade,
            uf,
            email,
            celular
        }

        try {
            const response = await api.post('/cliente/cadastro', dados)
            alert(`Seja bem-vindo. Seu id de acesso é ${response.data}`)
            navegacao('/')
        } catch (error) {
            alert('Erro ao tentar cadastrar. Tente novamente.')
        }
    }


    return (
        <div className="novo-cliente-container">
            <div className="content">
                <section className="cliente-form">
                    <section className="logo-carrinho-compras">
                        <img src={CarrinhoCompras} alt="Carrinho de compras" style={{ width: '100%' }} />

                        <Link to="/"> 
                            <FiArrowLeftCircle size={30} color="#e02041"/>
                        </Link>
                    </section>
                    <section className="form-cadastro-cliente">
                        <h1>Cadastro de clientes</h1>
                        <form onSubmit={executarCadastro}>
                            <input
                                placeholder="Nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                            <input
                                placeholder="Sobrenome"
                                value={sobrenome}
                                onChange={e => setSobrenome(e.target.value)}
                                style={{ width: 220 }}

                            />
                            <input
                                placeholder="CPF"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
                            />
                            <input
                                placeholder="Sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                                style={{ width: 98 }}
                            />

                            <input
                                placeholder="UF"
                                value={uf}
                                onChange={e => setUf(e.target.value)}
                                style={{ width: 100 }}
                            />

                            <input
                                placeholder="Endereço"
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                                style={{ width: 422 }}
                            />
                            <input
                                placeholder="Cidade"
                                value={cidade}
                                onChange={e => setCidade(e.target.value)}
                                style={{ width: 180 }}
                            />
                            <input
                                placeholder="Celular"
                                value={celular}
                                onChange={e => setCelular(e.target.value)}
                                style={{ width: 218 }}
                            />
                            <input
                                placeholder="E-mail"
                                value={email}
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                style={{ width: 422 }}
                            />

                            <button className="button" style={{ width: 422}} >
                                Cadastrar
                            </button>
                        </form>
                    </section>
                </section>
            </div>
        </div>
    )
}