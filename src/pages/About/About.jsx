import './About.css'

import React from 'react'
import { useNavigate } from 'react-router-dom'

export function About() {

    const back = useNavigate()

    return (
        <div className='about'>
            <button onClick={() => back(-1)}>←</button>
            <p className='about-back'>voltar</p>
            <h1>Informações sobre o site</h1>
            <h3>• Este site foi construído no início do ano de 2023, e os mesmos jogos que estão na sessão de 'lançamentos' já podem ter sido lançados.</h3>
            <h3>• As informações em certos jogos que se encontram com a sigla "NA" se referem a uma informação indefinida, onde não foi possível encontrar nada sobre a mesma.</h3>
            <h3>• Este site não possui a sua versão 'Premium Pack' pois ele foi construído pensando na parte gratuita, quem sabe algum dia ele realmente não se torne uma plataforma real de streaming, mas por enquanto, ele é somente um projeto de um fã de games que já imaginou como seria uma plataforma de streaming de jogos ao estilo Netflix.</h3>
            <p className='icon'>Ícone Editar imagem por Icons8</p>
        </div>
    )
}