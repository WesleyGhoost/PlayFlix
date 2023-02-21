import './NotFound.css'
import 'animate.css'

import Resting from '../../img/secret-gif/resting-on-bonfire.gif'

import { useNavigate } from 'react-router-dom'

export function NotFound() {
    const back = useNavigate()

    return(
        <>
            <button className='back-resting' onClick={() => back(-1)}>←</button>
            <p className='back-resting-p'>voltar</p>
            <div className='resting'>
                <img src={Resting} alt="Descansando na fogueira" />
                <h2 className='animate__animated animate__zoomIn'>Ah, Olá, não esperava te encontrar por aqui.</h2>
                <h2 className='animate__animated animate__zoomIn animate__delay-2s'>Sinto lhe informar, mas está página não existe (ou ao menos não deveria existir)</h2>
                <h2 className='animate__animated animate__zoomIn animate__delay-5s'>Se preferir, aproveite e descanse. Aprecie a fogueira enquanto descansa de sua aventura...</h2>
            </div>
        </>
    )
}