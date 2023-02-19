import './ChoosePack.css'
import 'animate.css'

import { Link } from 'react-router-dom'

export function ChoosePack() {

    return(
        <>
            <h1 className='playflix animate__animated animate__fadeInDown'>PLAYFLIX</h1>
            <div className='container-packs animate__animated animate__fadeInLeft animate__delay-1s'>
                <Link to="/perfil" className='starter-pack'>
                    <h1 className='starter-title'>Starter Pack</h1>
                    <p className='starter-descrip'>Você terá acesso à visualização do catálogo, onde você não poderá jogar mas irá conseguir acessar os trailers e as informações dos jogos disponíveis e dos que virão em um futuro próximo. </p>
                </Link>
                <Link className='premium-pack'>
                    <h1 className='premium-title'>Premium Pack</h1>
                    <p className='premium-descrip'>Jogue à vontade todos os jogos presentes no catálogo, indo de <em>The Witcher 3</em> até <em>Skyrim</em>, de <em>Elden Ring</em> até <em>Dark Souls</em>. Viaje em diversos mundos diferentes e aguarde os próximos lançamentos mais hypados da indústria dos games.</p>
                </Link>
            </div>
        </>
    )
}