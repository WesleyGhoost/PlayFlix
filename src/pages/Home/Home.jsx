import '../pages.css'
import 'animate.css'

import React from "react"
import Modal from 'react-modal'

import Elden from '../../img/imgs-games/elden-ring.jpg'
import TheLast from '../../img/imgs-games/the-last-of-us.jpg'
import RedDead from '../../img/imgs-games/red-dead-2.jpg'
import Gow from '../../img/imgs-games/gow-2018.jpg'
import Witcher from '../../img/imgs-games/the-witcher-3.jpg'

import Mortal from '../../img/imgs-games/mortal-kombat-11.jfif'
import Tekken from '../../img/imgs-games/tekken-7.jpg'
import Kof from '../../img/imgs-games/kof.png'
import Street from '../../img/imgs-games/street-fighter-v.jfif'
import Marvel from '../../img/imgs-games/marvel-vs-capcom.jpg'

import Bloodborne from '../../img/imgs-games/bloodborne.jpg'
import Hollow from '../../img/imgs-games/hollow-knight.jfif'
import Dark3 from '../../img/imgs-games/dark-souls-3.jpg'
import Celeste from '../../img/imgs-games/celeste.png'
import Dark from '../../img/imgs-games/dark-souls.jpg'

import Zelda from '../../img/imgs-games/zelda-breath.jpg'
import Skyrim from '../../img/imgs-games/skyrim.jfif'
import Fallout from '../../img/imgs-games/fallout.jfif'
import Assassin from '../../img/imgs-games/ac-valhalla.jpg'
import Dead from '../../img/imgs-games/dead-cells.png'

import { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { AssassinTrailer, BloodTrailer, DarkThreeTrailer, DarkTrailer, EldenTrailer, FalloutTrailer, GowTrailer, MortalTrailer, RedDeadTrailer, SkyrimTrailer, StreetTrailer, TekkenTrailer, TheLastTrailer, WitcherTrailer, ZeldaTrailer } from '../../trailers/TrailersAAA'
import { KofTrailer, MarvelTrailer } from '../../trailers/TrailersRetro'
import { CelesteTrailer, DeadTrailer, HollowTrailer } from '../../trailers/TrailersIndie'

 export function Home() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [modalGowIsOpen, setGowIsOpen] = useState(false)
    function showGowModal() {
        setGowIsOpen(true)
    }
    function closeGowModal() {
        setGowIsOpen(false)
    }

    const [modalWitcherIsOpen, setWitcherIsOpen] = useState(false)
    function showWitcherModal() {
        setWitcherIsOpen(true)
    }
    function closeWitcherModal() {
        setWitcherIsOpen(false)
    }

    const [modalTheLastIsOpen, setTheLastIsOpen] = useState(false)
    function showTheLastModal() {
        setTheLastIsOpen(true)
    }
    function closeTheLastModal() {
        setTheLastIsOpen(false)
    }

    const [modalEldenIsOpen, setEldenIsOpen] = useState(false)
    function showEldenModal() {
        setEldenIsOpen(true)
    }
    function closeEldenModal() {
        setEldenIsOpen(false)
    }

    const [modalRedDeadIsOpen, setRedDeadIsOpen] = useState(false)
    function showRedDeadModal() {
        setRedDeadIsOpen(true)
    }
    function closeRedDeadModal() {
        setRedDeadIsOpen(false)
    }

    const [modalMortalIsOpen, setMortalIsOpen] = useState(false)
    function showMortalModal() {
        setMortalIsOpen(true)
    }
    function closeMortalModal() {
        setMortalIsOpen(false)
    }

    const [modalTekkenIsOpen, setTekkenIsOpen] = useState(false)
    function showTekkenModal() {
        setTekkenIsOpen(true)
    }
    function closeTekkenModal() {
        setTekkenIsOpen(false)
    }

    const [modalKofIsOpen, setKofIsOpen] = useState(false)
    function showKofModal() {
        setKofIsOpen(true)
    }
    function closeKofModal() {
        setKofIsOpen(false)
    }

    const [modalStreetIsOpen, setStreetIsOpen] = useState(false)
    function showStreetModal() {
        setStreetIsOpen(true)
    }
    function closeStreetModal() {
        setStreetIsOpen(false)
    }

    const [modalMarvelIsOpen, setMarvelIsOpen] = useState(false)
    function showMarvelModal() {
        setMarvelIsOpen(true)
    }
    function closeMarvelModal() {
        setMarvelIsOpen(false)
    }

    const [modalBloodIsOpen, setBloodIsOpen] = useState(false)
    function showBloodModal() {
        setBloodIsOpen(true)
    }
    function closeBloodModal() {
        setBloodIsOpen(false)
    }

    const [modalHollowIsOpen, setHollowIsOpen] = useState(false)
    function showHollowModal() {
        setHollowIsOpen(true);
    }
    function closeHollowModal() {
        setHollowIsOpen(false);
    }

    const [modalDarkThreeIsOpen, setDarkThreeIsOpen] = useState(false)
    function showDarkThreeModal() {
        setDarkThreeIsOpen(true)
    }
    function closeDarkThreeModal() {
        setDarkThreeIsOpen(false)
    }

    const [modalCelesteIsOpen, setCelesteIsOpen] = useState(false)
    function showCelesteModal() {
        setCelesteIsOpen(true);
    }
    function closeCelesteModal() {
        setCelesteIsOpen(false);
    }

    const [modalDarkIsOpen, setDarkIsOpen] = useState(false)
    function showDarkModal() {
        setDarkIsOpen(true)
    }
    function closeDarkModal() {
        setDarkIsOpen(false)
    }

    const [modalZeldaIsOpen, setZeldaIsOpen] = useState(false)
    function showZeldaModal() {
        setZeldaIsOpen(true)
    }
    function closeZeldaModal() {
        setZeldaIsOpen(false)
    }

    const [modalSkyrimIsOpen, setSkyrimIsOpen] = useState(false)
    function showSkyrimModal() {
        setSkyrimIsOpen(true)
    }
    function closeSkyrimModal() {
        setSkyrimIsOpen(false)
    }

    const [modalFalloutIsOpen, setFalloutIsOpen] = useState(false)
    function showFalloutModal() {
        setFalloutIsOpen(true)
    }
    function closeFalloutModal() {
        setFalloutIsOpen(false)
    }

    const [modalAssassinIsOpen, setAssassinIsOpen] = useState(false)
    function showAssassinModal() {
        setAssassinIsOpen(true)
    }
    function closeAssassinModal() {
        setAssassinIsOpen(false)
    }

    const [modalDeadIsOpen, setDeadIsOpen] = useState(false)
    function showDeadModal() {
        setDeadIsOpen(true);
    }
    function closeDeadModal() {
        setDeadIsOpen(false);
    }

    return(
        <div>
            <Navbar />
            <div className="game-on-top">
                <img src={Bloodborne} alt="Bloodborne"/>
                <div className="informations animate__animated animate__fadeInLeft">
                    <h3 onClick={showBloodModal} className="informations-trailer">Assistir ao trailer</h3>
                    <h3 onClick={showBloodModal} className="informations-more">Mais informações</h3>
                </div>
            </div>
            <section className="tags">
                <h3>Mais premiados🏆</h3>
                <div className="tags-games">
                    <img onClick={showGowModal} src={Gow} alt="God of War"/>
                    <Modal
                        isOpen={modalGowIsOpen}
                        onRequestClose={closeGowModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <GowTrailer />
                        <button onClick={closeGowModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showWitcherModal} src={Witcher} alt="The Witcher"/>
                    <Modal
                        isOpen={modalWitcherIsOpen}
                        onRequestClose={closeWitcherModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <WitcherTrailer />
                        <button onClick={closeWitcherModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showTheLastModal} src={TheLast} alt="The Last of Us"/>
                    <Modal
                        isOpen={modalTheLastIsOpen}
                        onRequestClose={closeTheLastModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <TheLastTrailer />
                        <button onClick={closeTheLastModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showEldenModal} src={Elden} alt="Elden Ring"/>
                    <Modal
                        isOpen={modalEldenIsOpen}
                        onRequestClose={closeEldenModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <EldenTrailer />
                        <button onClick={closeEldenModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showRedDeadModal} className='final-img' src={RedDead} alt="Red Dead Redemption 2"/>
                    <Modal
                        isOpen={modalRedDeadIsOpen}
                        onRequestClose={closeRedDeadModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <RedDeadTrailer />
                        <button onClick={closeRedDeadModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>

            <section className="tags">
                <h3>Pancadaria🥊</h3>
                <div className="tags-games">
                    <img onClick={showMortalModal} src={Mortal} alt="Mortal Kombat 11"/>
                    <Modal
                        isOpen={modalMortalIsOpen}
                        onRequestClose={closeMortalModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MortalTrailer />
                        <button onClick={closeMortalModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showTekkenModal} src={Tekken} alt="Tekken 7"/>
                    <Modal
                        isOpen={modalTekkenIsOpen}
                        onRequestClose={closeTekkenModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <TekkenTrailer />
                        <button onClick={closeTekkenModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showKofModal}src={Kof} alt="The King of Fighters 97"/>
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

                    <img onClick={showStreetModal} src={Street} alt="Street Fighter V"/>
                    <Modal
                        isOpen={modalStreetIsOpen}
                        onRequestClose={closeStreetModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <StreetTrailer />
                        <button onClick={closeStreetModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showMarvelModal} className='final-img' src={Marvel} alt="Marvel vs Capcom 2"/>
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
                </div>
            </section>

            <section className="tags">
            <h3>Desafiadores😈</h3>
                <div className="tags-games">
                    <img onClick={showBloodModal} src={Bloodborne} alt="Bloodborne"/>
                    <Modal
                        isOpen={modalBloodIsOpen}
                        onRequestClose={closeBloodModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <BloodTrailer />
                        <button onClick={closeBloodModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showHollowModal} src={Hollow} alt="Hollow Knight"/>
                    <Modal
                        isOpen={modalHollowIsOpen}
                        onRequestClose={closeHollowModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <HollowTrailer />
                        <button onClick={closeHollowModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showDarkThreeModal} src={Dark3} alt="Dark Souls 3"/>
                    <Modal
                        isOpen={modalDarkThreeIsOpen}
                        onRequestClose={closeDarkThreeModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <DarkThreeTrailer />
                        <button onClick={closeDarkThreeModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showCelesteModal} src={Celeste} alt="Celeste"/>
                    <Modal
                        isOpen={modalCelesteIsOpen}
                        onRequestClose={closeCelesteModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <CelesteTrailer />
                        <button onClick={closeCelesteModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showDarkModal} className='final-img' src={Dark} alt="Dark Souls"/>
                    <Modal
                        isOpen={modalDarkIsOpen}
                        onRequestClose={closeDarkModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <DarkTrailer />
                        <button onClick={closeDarkModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>

            <section className="tags">
            <h3>Aventuras empolgantes ⚔</h3>
                <div className="tags-games">
                    <img onClick={showZeldaModal} className='last-imgs'src={Zelda} alt="Zelda: Breath of the Wild"/>
                    <Modal
                        isOpen={modalZeldaIsOpen}
                        onRequestClose={closeZeldaModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <ZeldaTrailer />
                        <button onClick={closeZeldaModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showSkyrimModal} className='last-imgs'src={Skyrim} alt="Skyrim"/>
                    <Modal
                        isOpen={modalSkyrimIsOpen}
                        onRequestClose={closeSkyrimModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <SkyrimTrailer />
                        <button onClick={closeSkyrimModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showFalloutModal} className='last-imgs'src={Fallout} alt="Fallout 4"/>
                    <Modal
                        isOpen={modalFalloutIsOpen}
                        onRequestClose={closeFalloutModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <FalloutTrailer />
                        <button onClick={closeFalloutModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showAssassinModal} className='last-imgs'src={Assassin} alt="Assassin's Creed Valhalla"/>
                    <Modal
                        isOpen={modalAssassinIsOpen}
                        onRequestClose={closeAssassinModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <AssassinTrailer />
                        <button onClick={closeAssassinModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showDeadModal} className='last-imgs final-img' src={Dead} alt="Dead Cells"/>
                    <Modal
                        isOpen={modalDeadIsOpen}
                        onRequestClose={closeDeadModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <DeadTrailer />
                        <button onClick={closeDeadModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
        </div>
    )
}