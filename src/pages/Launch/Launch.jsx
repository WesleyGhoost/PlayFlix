import './Launch.css'

import Resident from '../../img/imgs-logo/resident-evil-4.png'
import Silent from '../../img/imgs-logo/silent-hill.png'
import StreetSix from '../../img/imgs-logo/street-fighter-6.png'
import ZeldaTears from '../../img/imgs-logo/zelda-tears.png'
import HollowSilk from '../../img/imgs-logo/hollow-knight-silk.png'
import Sea from '../../img/imgs-logo/sea-of-stars.png'
import Lies from '../../img/imgs-logo/lies-of-p.png'
import WoLong from '../../img/imgs-logo/wo-long.png'
import Starfield from '../../img/imgs-logo/starfield.png'

import { useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

export function Launch() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div>
            <Navbar />

            <h1 className="title-launchs">Lançamentos</h1>
            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/9aa6jFsnRfg" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={WoLong} />
                <h2 className='data'>3 de Março</h2>
            </div>
            <p>Wo Long: Fallen Dynasty é a história dramática e cheia de ação de um soldado anónimo da milícia que luta pela sobrevivência, numa versão de fantasia sombria dos Finais da Dinastia Han onde os demónios atormentam os Três Reinos. Vais usar espadas e técnicas baseadas nas artes marciais chinesas para enfrentar criaturas mortíferas e soldados inimigos</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/E69tKrfEQag" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={Resident} />
                <h2 className='data'>24 de Março</h2>
            </div>
            <p>Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes do incidente, foi recrutado como agente, respondendo diretamente ao presidente dos Estados Unidos. Com a experiência de várias missões em suas costas,Leon é enviado para resgatar a filha sequestrada do presidente. Ele a rastreia até uma vila europeia isolada, onde há algo terrivelmente errado com os aldeões. E a cortina se abre nessa história de um ousado resgate e horror de sobrevivência extenuante.</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/2SNF4M_v7wc" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={ZeldaTears} />
                <h2 className='data'>12 de Maio</h2>
            </div>
            <p>Além das vastas terras de Hyrule, a mais recente entrada na célebre série Legend of Zelda irá levá-lo aos céus! Aguarde ansiosamente a enorme aventura de Link recomeçar quando The Legend of Zelda: Tears of the Kingdom, a sequência de The Legend of Zelda: Breath of the Wild, for lançado em 12 de maio de 2023.</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/qqW4ENjH-pg" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={StreetSix} />
                <h2 className='data'>2 de Junho</h2>
            </div>
            <p>Em Street Fighter 6, jogadores poderão testar suas habilidades no mundo inteiro em busca de sua força pessoal. Ninguém começa sendo um campeão. Até mesmo os melhores lutadores tiveram que dar um primeiro passo. Agora, é a sua vez de aceitar o desafio e elevar seu jogo a um novo nível.</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/yQxwbZsL14Y" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img id='decrease' className='logo' src={HollowSilk} />
                <h2 className='data'>Antes do fim de Junho</h2>
            </div>
            <p>O vasto mundo interconectado de Hollow Knight: Silksong é trazido vividamente à vida em um estilo 2D tradicional, artesanal. Cidades douradas, lagos de fogo e mouros enevoados são ilustrados em detalhes requintados e acompanhados por uma vibrante partitura orquestral. Em sua busca pela verdade por trás de sua captura, Hornet fará amizade com estranhos surpreendentes, descobrirá segredos chocantes e resolverá mistérios antigos em um reino cheio de maravilhas.</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/pyC_qiW_4ZY" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={Silent} />
                <h2 className='data'>Ainda em 2023</h2>
            </div>
            <p>Silent Hill 2 é protagonizado por James Sunderland, um viúvo que viaja para a cidade de Silent Hill depois de receber uma carta de sua falecida esposa lhe informando que está a sua espera. A jogabilidade envolve navegar pelos diferentes locais da cidade, adquirir itens, solucionar quebra-cabeças e enfrentar uma variedade de tipos de monstros. (Descrição retirada do jogo original)</p>
            </div>
                
            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/BMComOd9qP4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'> 
                <img className='logo' src={Sea} />
                <h2 className='data'>Ainda em 2023</h2>
            </div>
            <p> Sea of Stars pretende modernizar a fórmula clássica de RPG nos campos de combate por turno, exploração e interações com o ambiente, enquanto oferece uma boa dose de nostalgia e diversão. Também oferecendo uma jornada cheia de perigos e maravilhas.</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/5a5JZVf0Xsk" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={Lies} />
                <h2 className='data'>Ainda em 2023</h2>
            </div>
            <p>Lies of P é um RPG de ação baseado no conto clássico do Pinóquio. Jogue como Pinóquio e resolva os mistérios e desastres que aconteceram na cidade de Krat. Durante a jornada, você será colocado em uma situação na qual mentir é necessário para proteger a si mesmo ou aos outros. Mentir como Pinóquio é uma das experiências mais importantes que você terá. Ao mesmo tempo, isso levará Pinóquio a se tornar um verdadeiro ser humano.</p>
            </div>

            <div className='container-launchs'>
            <iframe width="900" height="510" src="https://www.youtube.com/embed/pYqyVpCV-3c" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <div className='data-launchs'>
                <img className='logo' src={Starfield} />
                <h2 className='data'>Ainda em 2023</h2>
            </div>
            <p>Starfield é o primeiro novo universo em 25 anos da Bethesda Game Studios, os criadores premiados de The Elder Scrolls V: Skyrim e Fallout 4. Neste jogo de RPG de próxima geração ambientado entre as estrelas, crie qualquer personagem que você quiser e explore com liberdade incomparável enquanto embarca em uma jornada épica para responder ao maior mistério da humanidade.</p>
            </div>
        </div>
    )
}
