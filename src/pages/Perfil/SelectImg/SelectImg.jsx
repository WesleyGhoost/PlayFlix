import './SelectImg.css'

import Arthur from '../../../img/imgs-perfil/Arthur.jpg'
import Leon from '../../../img/imgs-perfil/Leon.jpg'
import Ellie from '../../../img/imgs-perfil/Ellie.jpg'
import Joel from '../../../img/imgs-perfil/Joel.jpg'
import Dante from '../../../img/imgs-perfil/Dante.jpg' 
import Scorpion from '../../../img/imgs-perfil/Scorpion.jfif'
import Subzero from '../../../img/imgs-perfil/Subzero.jpg'
import Kratos from '../../../img/imgs-perfil/Kratos.jpg'
import Jill from '../../../img/imgs-perfil/Jill.jpg'
import Zelda from '../../../img/imgs-perfil/Link.jpg'
import Geralt from '../../../img/imgs-perfil/Geralt.jpg'
import Ezio from '../../../img/imgs-perfil/Ezio.jpg'

import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { ImgContext } from '../../../contexts/Img'

export function SelectImg() {
    const {changeImg} = useContext(ImgContext)
    const {img} = useContext(ImgContext)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    function ChangeForArthur() {
        changeImg(Arthur)
    }
    function ChangeForGeralt() {
        changeImg(Geralt)
    }
    function ChangeForDante() {
        changeImg(Dante)
    }
    function ChangeForLeon() {
        changeImg(Leon)
    }
    function ChangeForJill() {
        changeImg(Jill)
    }
    function ChangeForKratos() {
        changeImg(Kratos)
    }
    function ChangeForJoel() {
        changeImg(Joel)
    }
    function ChangeForEllie() {
        changeImg(Ellie)
    }
    function ChangeForEzio() {
        changeImg(Ezio)
    }
    function ChangeForScorpion() {
        changeImg(Scorpion)
    }
    function ChangeForSubzero() {
        changeImg(Subzero)
    }
    function ChangeForLink() {
        changeImg(Zelda)
    }

    function storageImg() {
        localStorage.setItem('img', img)
    }

    const back = useNavigate()

    return(
        <>
            <button className='back-select' onClick={() => back(-1)}>←</button>
            <p className='back-select-p'>voltar</p>
            <h1 className='title-select'>Escolha o personagem de sua preferência:</h1>
            <div className='container'>
                <div className='container-imgs'>
                    <img onClick={() => {storageImg(); ChangeForArthur(); back("/perfil")}} src={Arthur} alt="Arthur"/>
                    <img onClick={() => {storageImg(); ChangeForGeralt(); back("/perfil")}} src={Geralt} alt="Geralt"/>
                    <img onClick={() => {storageImg(); ChangeForDante(); back("/perfil")}} src={Dante} alt="Dante"/>
                </div>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForLeon(); back("/perfil")}} src={Leon} alt="Leon"/>
                    <img onClick={() => {ChangeForJill(); back("/perfil")}} src={Jill} alt="Jill"/>
                    <img onClick={() => {ChangeForKratos(); back("/perfil")}} src={Kratos} alt="Kratos"/>
                </div>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForJoel(); back("/perfil")}} src={Joel} alt="Joel"/>
                    <img onClick={() => {ChangeForEllie(); back("/perfil")}} src={Ellie} alt="Ellie"/>
                    <img onClick={() => {ChangeForEzio(); back("/perfil")}} src={Ezio} alt="Ezio"/>
                </div>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForScorpion(); back("/perfil")}} src={Scorpion} alt="Scorpion"/>
                    <img onClick={() => {ChangeForSubzero(); back("/perfil")}} src={Subzero} alt="Sub-Zero"/>
                    <img onClick={() => {ChangeForLink(); back("/perfil")}} src={Zelda} alt="Zelda"/>
                </div>
            </div>
        </>
    )
}