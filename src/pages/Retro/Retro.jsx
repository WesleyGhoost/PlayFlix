import '../pages.css'
import 'animate.css'

import Modal from 'react-modal'

import Pacman from '../../img/imgs-games/pacman.png'
import Fantasy from '../../img/imgs-games/final-fantasy.jfif'
import Castlevania from '../../img/imgs-games/castlevania.jfif'
import Fight from '../../img/imgs-games/final-fight.jfif'
import Contra from '../../img/imgs-games/contra.png'

import Mario from '../../img/imgs-games/super-mario-world.jpg'
import Kof from '../../img/imgs-games/kof.png'
import Sonic from '../../img/imgs-games/sonic.jpg'
import KillerSnes from '../../img/imgs-games/killer-instinct-snes.png'
import MortalSnes from '../../img/imgs-games/mortal-kombat-3.jpg'

import GtaSan from '../../img/imgs-games/gta-san-andreas.jpg'
import Marvel from '../../img/imgs-games/marvel-vs-capcom.jpg'
import GowClassic from '../../img/imgs-games/gow.jpg'
import Metal from '../../img/imgs-games/metal-gear.jpg'
import Rayman from '../../img/imgs-games/rayman.jpg'

import { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { CastleTrailer, ContraTrailer, FantasyTrailer, FightTrailer, GowClassicTrailer, GtaSanTrailer, KillerSnesTrailer, KofTrailer, MarioTrailer, MarvelTrailer, MetalTrailer, MortalSnesTrailer, PacmanTrailer, RaymanTrailer, SonicTrailer } from '../../trailers/TrailersRetro'

Modal.setAppElement('#root')

export function Retro() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [modalPacmanIsOpen, setPacmanIsOpen] = useState(false)
    function showPacmanModal() {
        setPacmanIsOpen(true)
    }
    function closePacmanModal() {
        setPacmanIsOpen(false)
    }

    const [modalFantasyIsOpen, setFantasyIsOpen] = useState(false)
    function showFantasyModal() {
        setFantasyIsOpen(true)
    }
    function closeFantasyModal() {
        setFantasyIsOpen(false)
    }

    const [modalCastleIsOpen, setCastleIsOpen] = useState(false)
    function showCastleModal() {
        setCastleIsOpen(true)
    }
    function closeCastleModal() {
        setCastleIsOpen(false)
    }

    const [modalFightIsOpen, setFightIsOpen] = useState(false)
    function showFightModal() {
        setFightIsOpen(true)
    }
    function closeFightModal() {
        setFightIsOpen(false)
    }

    const [modalContraIsOpen, setContraIsOpen] = useState(false)
    function showContraModal() {
        setContraIsOpen(true)
    }
    function closeContraModal() {
        setContraIsOpen(false)
    }

    const [modalMarioIsOpen, setMarioIsOpen] = useState(false)
    function showMarioModal() {
        setMarioIsOpen(true)
    }
    function closeMarioModal() {
        setMarioIsOpen(false)
    }

    const [modalKofIsOpen, setKofIsOpen] = useState(false)
    function showKofModal() {
        setKofIsOpen(true)
    }
    function closeKofModal() {
        setKofIsOpen(false)
    }

    const [modalSonicIsOpen, setSonicIsOpen] = useState(false)
    function showSonicModal() {
        setSonicIsOpen(true)
    }
    function closeSonicModal() {
        setSonicIsOpen(false)
    }

    const [modalKillerSnesIsOpen, setKillerSnesIsOpen] = useState(false)
    function showKillerSnesModal() {
        setKillerSnesIsOpen(true)
    }
    function closeKillerSnesModal() {
        setKillerSnesIsOpen(false)
    }

    const [modalMortalSnesIsOpen, setMortalSnesIsOpen] = useState(false)
    function showMortalSnesModal() {
        setMortalSnesIsOpen(true)
    }
    function closeMortalSnesModal() {
        setMortalSnesIsOpen(false)
    }

    const [modalGtaSanIsOpen, setGtaSanIsOpen] = useState(false)
    function showGtaSanModal() {
        setGtaSanIsOpen(true)
    }
    function closeGtaSanModal() {
        setGtaSanIsOpen(false)
    }

    const [modalMarvelIsOpen, setMarvelIsOpen] = useState(false)
    function showMarvelModal() {
        setMarvelIsOpen(true)
    }
    function closeMarvelModal() {
        setMarvelIsOpen(false)
    }

    const [modalGowClassicIsOpen, setGowClassicIsOpen] = useState(false)
    function showGowClassicModal() {
        setGowClassicIsOpen(true)
    }
    function closeGowClassicModal() {
        setGowClassicIsOpen(false)
    }

    const [modalMetalIsOpen, setMetalIsOpen] = useState(false)
    function showMetalModal() {
        setMetalIsOpen(true)
    }
    function closeMetalModal() {
        setMetalIsOpen(false)
    }

    const [modalRaymanIsOpen, setRaymanIsOpen] = useState(false)
    function showRaymanModal() {
        setRaymanIsOpen(true)
    }
    function closeRaymanModal() {
        setRaymanIsOpen(false)
    }
    return(
        <div>
            <Navbar />
            <div className="game-on-top">
                <h1 className='genRetro'>Retrô</h1>
                <img src={Fight} />
                <div className="informations animate__animated animate__fadeInLeft">
                    <h3 onClick={showFightModal} className="informations-trailer">Assistir ao trailer</h3>
                    <h3 onClick={showFightModal} className="informations-more">Mais informações</h3>
                </div>
            </div>
            <section className="tags">
                <h3>Anos 80</h3>
                <div className="tags-games">
                    <img onClick={showPacmanModal} src={Pacman} />
                    <Modal
                        isOpen={modalPacmanIsOpen}
                        onRequestClose={closePacmanModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <PacmanTrailer />
                        <button onClick={closePacmanModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showFantasyModal} src={Fantasy} />
                    <Modal
                        isOpen={modalFantasyIsOpen}
                        onRequestClose={closeFantasyModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <FantasyTrailer />
                        <button onClick={closeFantasyModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showCastleModal} src={Castlevania} />
                    <Modal
                        isOpen={modalCastleIsOpen}
                        onRequestClose={closeCastleModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <CastleTrailer />
                        <button onClick={closeCastleModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showFightModal} src={Fight} />
                    <Modal
                        isOpen={modalFightIsOpen}
                        onRequestClose={closeFightModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <FightTrailer />
                        <button onClick={closeFightModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showContraModal} className='final-img' src={Contra} />
                    <Modal
                        isOpen={modalContraIsOpen}
                        onRequestClose={closeContraModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <ContraTrailer />
                        <button onClick={closeContraModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
            <section className="tags">
                <h3>Anos 90</h3>
                <div className="tags-games">
                    <img onClick={showMarioModal} src={Mario} />
                    <Modal
                        isOpen={modalMarioIsOpen}
                        onRequestClose={closeMarioModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MarioTrailer />
                        <button onClick={closeMarioModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showKofModal} src={Kof} />
                    <Modal
                        isOpen={modalKofIsOpen}
                        onRequestClose={closeKofModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <KofTrailer />
                        <button onClick={closeKofModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showSonicModal} src={Sonic} />
                    <Modal
                        isOpen={modalSonicIsOpen}
                        onRequestClose={closeSonicModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <SonicTrailer />
                        <button onClick={closeSonicModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showKillerSnesModal} src={KillerSnes} />
                    <Modal
                        isOpen={modalKillerSnesIsOpen}
                        onRequestClose={closeKillerSnesModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <KillerSnesTrailer />
                        <button onClick={closeKillerSnesModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showMortalSnesModal} className='final-img' src={MortalSnes} />
                    <Modal
                        isOpen={modalMortalSnesIsOpen}
                        onRequestClose={closeMortalSnesModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MortalSnesTrailer />
                        <button onClick={closeMortalSnesModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
            <section className="tags">
                <h3>Anos 2000</h3>
                <div className="tags-games">
                    <img onClick={showGtaSanModal} className='last-imgs' src={GtaSan} />
                    <Modal
                        isOpen={modalGtaSanIsOpen}
                        onRequestClose={closeGtaSanModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <GtaSanTrailer />
                        <button onClick={closeGtaSanModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showMarvelModal} className='last-imgs' src={Marvel} />
                    <Modal
                        isOpen={modalMarvelIsOpen}
                        onRequestClose={closeMarvelModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MarvelTrailer />
                        <button onClick={closeMarvelModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showGowClassicModal} className='last-imgs' src={GowClassic} />
                    <Modal
                        isOpen={modalGowClassicIsOpen}
                        onRequestClose={closeGowClassicModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <GowClassicTrailer />
                        <button onClick={closeGowClassicModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showMetalModal} className='last-imgs' src={Metal} />
                    <Modal
                        isOpen={modalMetalIsOpen}
                        onRequestClose={closeMetalModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MetalTrailer />
                        <button onClick={closeMetalModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showRaymanModal} className='last-imgs final-img' src={Rayman} />
                    <Modal
                        isOpen={modalRaymanIsOpen}
                        onRequestClose={closeRaymanModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <RaymanTrailer />
                        <button onClick={closeRaymanModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
        </div>
    )
}