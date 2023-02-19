import './Perfil.css'
import 'animate.css'

import React from "react"
import selectIcon from '../../img/selection.png'

import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { NickContext } from '../../contexts/Nick'
import { ImgContext } from '../../contexts/Img'

export function Perfil() {
    const [nickname, setNickname] = useState('')

    const {access} = useContext(NickContext)
    const {img} = useContext(ImgContext)

    function handleAccess() {
        access(nickname)
    }

    return (
        <div>
            <div className="container-perfil animate__animated animate__zoomIn" >
               <h1>Qual o seu <strong>nickname</strong>?</h1>
               <img className='character' src={img}/>
               <Link to="/select-char"><img className='select' src={selectIcon}/></Link>

               <input 
               type="text" 
               placeholder="Nickname"
               value={nickname}
               onChange={(e) => setNickname(e.target.value)}
               />

               <Link to="/home"><button onClick={handleAccess}>Play</button></Link>
            </div>
        </div>
    )
}

