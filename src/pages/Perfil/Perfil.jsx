import './Perfil.css'
import 'animate.css'

import React from "react"
import selectIcon from '../../img/selection.png'

import { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NickContext } from '../../contexts/Nick'
import { ImgContext } from '../../contexts/Img'

export function Perfil() {
    const [nickname, setNickname] = useState('')

    const {access} = useContext(NickContext)
    const {img} = useContext(ImgContext)

    const goToHome = useNavigate()

    function handleAccess() {
        if(nickname === '') {
            document.querySelector('#alert').style.display = "block"
        }
        else {
            document.querySelector('#alert').style.display = "none"
            access(nickname)
            goToHome("/home")
        }
    }
    function storageNick() {
        localStorage.setItem('nick', nickname)
    }
    function storageImg() {
        localStorage.setItem('img', img)
    }

    return (
        <div>
            <div className="container-perfil animate__animated animate__zoomIn" >
               <h1>Qual o seu <strong>nickname</strong>?</h1>
               <img className='character' src={img} alt="Personagem selecionado"/>
               <Link to="/select-char"><img className='select' src={selectIcon} alt="Escolha de personagem"/></Link>

               <input
               type="text" 
               placeholder="Nickname"
               value={nickname}
               onChange={(e) => setNickname(e.target.value)}
               />

               <p id='alert'>Por favor, insira um nickname</p>
               <button onClick={() => {storageNick(); storageImg(); handleAccess()}}>Play</button>
            </div>
        </div>
    )
}

