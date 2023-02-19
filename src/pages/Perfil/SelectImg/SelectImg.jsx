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
import { useContext } from 'react'
import { ImgContext } from '../../../contexts/Img'

export function SelectImg() {
    const {changeImg} = useContext(ImgContext)

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

    const back = useNavigate()

    return(
        <>
            <button className='back-select' onClick={() => back(-1)}>←</button>
            <p className='back-select-p'>voltar</p>
            <h1 className='title-select'>Escolha o personagem de sua preferência:</h1>
            <div className='container'>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForArthur(); back(-1)}} src={Arthur}/>
                    <img onClick={() => {ChangeForGeralt(); back(-1)}} src={Geralt}/>
                    <img onClick={() => {ChangeForDante(); back(-1)}} src={Dante}/>
                </div>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForLeon(); back(-1)}} src={Leon}/>
                    <img onClick={() => {ChangeForJill(); back(-1)}} src={Jill}/>
                    <img onClick={() => {ChangeForKratos(); back(-1)}} src={Kratos}/>
                </div>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForJoel(); back(-1)}} src={Joel}/>
                    <img onClick={() => {ChangeForEllie(); back(-1)}} src={Ellie}/>
                    <img onClick={() => {ChangeForEzio(); back(-1)}} src={Ezio}/>
                </div>
                <div className='container-imgs'>
                    <img onClick={() => {ChangeForScorpion(); back(-1)}} src={Scorpion}/>
                    <img onClick={() => {ChangeForSubzero(); back(-1)}} src={Subzero}/>
                    <img onClick={() => {ChangeForLink(); back(-1)}} src={Zelda}/>
                </div>
            </div>
        </>
    )
}