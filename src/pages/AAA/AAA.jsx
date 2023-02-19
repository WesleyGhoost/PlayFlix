import '../pages.css'
import 'animate.css';

import React from "react"
import Modal from 'react-modal'

import Witcher from '../../img/imgs-games/the-witcher-3.jpg'
import Zelda from '../../img/imgs-games/zelda-breath.jpg'
import Skyrim from '../../img/imgs-games/skyrim.jfif'
import Fallout from '../../img/imgs-games/fallout.jfif'
import Vampyr from '../../img/imgs-games/vampyr.jfif'

import Mortal from '../../img/imgs-games/mortal-kombat-11.jfif'
import Tekken from '../../img/imgs-games/tekken-7.jpg'
import Street from '../../img/imgs-games/street-fighter-v.jfif'
import Guilty from '../../img/imgs-games/guilty-gear.jpg'
import Killer from '../../img/imgs-games/killer-instinct.png'

import TheLast from '../../img/imgs-games/the-last-of-us.jpg'
import RedDead from '../../img/imgs-games/red-dead-2.jpg'
import Gow from '../../img/imgs-games/gow-2018.jpg'
import Assassin from '../../img/imgs-games/ac-valhalla.jpg'
import Gta from '../../img/imgs-games/gta-v.jfif'

import Elden from '../../img/imgs-games/elden-ring.jpg'
import Bloodborne from '../../img/imgs-games/bloodborne.jpg'
import Dark from '../../img/imgs-games/dark-souls.jpg'
import Sekiro from '../../img/imgs-games/sekiro.jpg'
import Dark3 from '../../img/imgs-games/dark-souls-3.jpg'

import Evil from '../../img/imgs-games/the-evil-within.jpg'
import ResidentVillage from '../../img/imgs-games/resident-evil-village.jpg'
import Callisto from '../../img/imgs-games/callisto.jpg'
import Outlast from '../../img/imgs-games/outlast.jpg'
import Resident2 from '../../img/imgs-games/resident-evil-2.jpg'

import { useState, useEffect } from 'react';
import { Navbar } from '../../components/Navbar/Navbar'

import { AssassinTrailer, BloodTrailer, CallistoTrailer, DarkThreeTrailer, DarkTrailer, EldenTrailer, EvilTrailer, FalloutTrailer, GowTrailer, GtaTrailer, GuiltyTrailer, KillerTrailer, MortalTrailer, OutlastTrailer, RedDeadTrailer, ReTwoTrailer, ReVillageTrailer, SekiroTrailer, SkyrimTrailer, StreetTrailer, TekkenTrailer, TheLastTrailer, VampyrTrailer, WitcherTrailer, ZeldaTrailer } from '../../trailers/TrailersAAA';

Modal.setAppElement('#root')

export function AAA() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [modalWitcherIsOpen, setWitcherIsOpen] = useState(false)
    function showWitcherModal() {
        setWitcherIsOpen(true)
    }
    function closeWitcherModal() {
        setWitcherIsOpen(false)
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

    const [modalVampyrIsOpen, setVampyrIsOpen] = useState(false)
    function showVampyrModal() {
        setVampyrIsOpen(true)
    }
    function closeVampyrModal() {
        setVampyrIsOpen(false)
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

    const [modalStreetIsOpen, setStreetIsOpen] = useState(false)
    function showStreetModal() {
        setStreetIsOpen(true)
    }
    function closeStreetModal() {
        setStreetIsOpen(false)
    }

    const [modalGuiltyIsOpen, setGuiltyIsOpen] = useState(false)
    function showGuiltyModal() {
        setGuiltyIsOpen(true)
    }
    function closeGuiltyModal() {
        setGuiltyIsOpen(false)
    }

    const [modalKillerIsOpen, setKillerIsOpen] = useState(false)
    function showKillerModal() {
        setKillerIsOpen(true)
    }
    function closeKillerModal() {
        setKillerIsOpen(false)
    }

    const [modalTheLastIsOpen, setTheLastIsOpen] = useState(false)
    function showTheLastModal() {
        setTheLastIsOpen(true)
    }
    function closeTheLastModal() {
        setTheLastIsOpen(false)
    }

    const [modalRedDeadIsOpen, setRedDeadIsOpen] = useState(false)
    function showRedDeadModal() {
        setRedDeadIsOpen(true)
    }
    function closeRedDeadModal() {
        setRedDeadIsOpen(false)
    }

    const [modalGowIsOpen, setGowIsOpen] = useState(false)
    function showGowModal() {
        setGowIsOpen(true)
    }
    function closeGowModal() {
        setGowIsOpen(false)
    }

    const [modalAssassinIsOpen, setAssassinIsOpen] = useState(false)
    function showAssassinModal() {
        setAssassinIsOpen(true)
    }
    function closeAssassinModal() {
        setAssassinIsOpen(false)
    }

    const [modalGtaIsOpen, setGtaIsOpen] = useState(false)
    function showGtaModal() {
        setGtaIsOpen(true)
    }
    function closeGtaModal() {
        setGtaIsOpen(false)
    }

    const [modalDarkIsOpen, setDarkIsOpen] = useState(false)
    function showDarkModal() {
        setDarkIsOpen(true)
    }
    function closeDarkModal() {
        setDarkIsOpen(false)
    }

    const [modalEldenIsOpen, setEldenIsOpen] = useState(false)
    function showEldenModal() {
        setEldenIsOpen(true)
    }
    function closeEldenModal() {
        setEldenIsOpen(false)
    }

    const [modalSekiroIsOpen, setSekiroIsOpen] = useState(false)
    function showSekiroModal() {
        setSekiroIsOpen(true)
    }
    function closeSekiroModal() {
        setSekiroIsOpen(false)
    }

    const [modalBloodIsOpen, setBloodIsOpen] = useState(false)
    function showBloodModal() {
        setBloodIsOpen(true)
    }
    function closeBloodModal() {
        setBloodIsOpen(false)
    }

    const [modalDarkThreeIsOpen, setDarkThreeIsOpen] = useState(false)
    function showDarkThreeModal() {
        setDarkThreeIsOpen(true)
    }
    function closeDarkThreeModal() {
        setDarkThreeIsOpen(false)
    }

    const [modalEvilIsOpen, setEvilIsOpen] = useState(false)
    function showEvilModal() {
        setEvilIsOpen(true)
    }
    function closeEvilModal() {
        setEvilIsOpen(false)
    }

    const [modalReVillageIsOpen, setReVillageIsOpen] = useState(false)
    function showReVillageModal() {
        setReVillageIsOpen(true)
    }
    function closeReVillageModal() {
        setReVillageIsOpen(false)
    }

    const [modalCallistoIsOpen, setCallistoIsOpen] = useState(false)
    function showCallistoModal() {
        setCallistoIsOpen(true)
    }
    function closeCallistoModal() {
        setCallistoIsOpen(false)
    }

    const [modalOutlastIsOpen, setOutlastIsOpen] = useState(false)
    function showOutlastModal() {
        setOutlastIsOpen(true)
    }
    function closeOutlastModal() {
        setOutlastIsOpen(false)
    }

    const [modalReTwoIsOpen, setReTwoIsOpen] = useState(false)
    function showReTwoModal() {
        setReTwoIsOpen(true)
    }
    function closeReTwoModal() {
        setReTwoIsOpen(false)
    }

    return (
        <div>
            <Navbar />
            <div className="game-on-top">
                <h1 className='genAAA'>Triple A</h1>
                <img src={Witcher} />
                <div className="informations animate__animated animate__fadeInLeft">
                    <h3 onClick={showWitcherModal} className="informations-trailer">Assistir ao trailer</h3>
                    <h3 onClick={showWitcherModal} className="informations-more">Mais informações</h3>
                </div>
            </div>
            <section className="tags">
                <h3>RPG</h3>
                <div className="tags-games">
                    <img onClick={showWitcherModal} id='witcher' src={Witcher} />
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

                    <img onClick={showZeldaModal} className='zelda' src={Zelda} />
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

                    <img onClick={showSkyrimModal} src={Skyrim} />
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

                    <img onClick={showFalloutModal} src={Fallout} />
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

                    <img onClick={showVampyrModal} className='final-img' src={Vampyr} />
                    <Modal
                        isOpen={modalVampyrIsOpen}
                        onRequestClose={closeVampyrModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <VampyrTrailer />
                        <button onClick={closeVampyrModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
            <section className="tags">
                <h3>Luta</h3>
                <div className="tags-games">
                    <img onClick={showMortalModal} src={Mortal} />
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

                    <img onClick={showTekkenModal} src={Tekken} />
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

                    <img onClick={showStreetModal} src={Street} />
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

                    <img onClick={showGuiltyModal} src={Guilty} />
                    <Modal
                        isOpen={modalGuiltyIsOpen}
                        onRequestClose={closeGuiltyModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <GuiltyTrailer />
                        <button onClick={closeGuiltyModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showKillerModal} className='final-img' src={Killer} />
                    <Modal
                        isOpen={modalKillerIsOpen}
                        onRequestClose={closeKillerModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <KillerTrailer />
                        <button onClick={closeKillerModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
            <section className="tags">
                <h3>Ação/Aventura</h3>
                <div className="tags-games">
                    <img onClick={showTheLastModal} src={TheLast} />
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

                    <img onClick={showRedDeadModal} src={RedDead} />
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

                    <img onClick={showGowModal} src={Gow} />
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

                    <img onClick={showAssassinModal} src={Assassin} />
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

                    <img onClick={showGtaModal} className='final-img' src={Gta} />
                    <Modal
                        isOpen={modalGtaIsOpen}
                        onRequestClose={closeGtaModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <GtaTrailer />
                        <button onClick={closeGtaModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
            <section className="tags">
                <h3>Souls-Like</h3>
                <div className="tags-games">
                    <img onClick={showDarkModal} src={Dark} />
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

                    <img onClick={showEldenModal} src={Elden} />
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

                    <img onClick={showSekiroModal} src={Sekiro} />
                    <Modal
                        isOpen={modalSekiroIsOpen}
                        onRequestClose={closeSekiroModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <SekiroTrailer />
                        <button onClick={closeSekiroModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showBloodModal} src={Bloodborne} />
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

                    <img onClick={showDarkThreeModal} className='final-img' src={Dark3} />
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
                </div>
            </section>
            <section className="tags">
                <h3>Survivor Horror</h3>
                <div className="tags-games">
                    <img onClick={showEvilModal} className='last-imgs' src={Evil} />
                    <Modal
                        isOpen={modalEvilIsOpen}
                        onRequestClose={closeEvilModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <EvilTrailer />
                        <button onClick={closeEvilModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showReVillageModal} className='last-imgs' src={ResidentVillage} />
                    <Modal
                        isOpen={modalReVillageIsOpen}
                        onRequestClose={closeReVillageModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <ReVillageTrailer />
                        <button onClick={closeReVillageModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showCallistoModal} className='last-imgs' src={Callisto} />
                    <Modal
                        isOpen={modalCallistoIsOpen}
                        onRequestClose={closeCallistoModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <CallistoTrailer />
                        <button onClick={closeCallistoModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showOutlastModal} className='last-imgs' src={Outlast} />
                    <Modal
                        isOpen={modalOutlastIsOpen}
                        onRequestClose={closeOutlastModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <OutlastTrailer />
                        <button onClick={closeOutlastModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showReTwoModal} className='last-imgs final-img' src={Resident2} />
                    <Modal
                        isOpen={modalReTwoIsOpen}
                        onRequestClose={closeReTwoModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <ReTwoTrailer />
                        <button onClick={closeReTwoModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
        </div>
    )
}