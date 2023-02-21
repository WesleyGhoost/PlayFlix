import '../pages.css'
import 'animate.css'

import Plague from '../../img/imgs-games/a-plague-tale.jpg'
import Undertale from '../../img/imgs-games/undertale.jpg'
import Celeste from '../../img/imgs-games/celeste.png'
import Talos from '../../img/imgs-games/talos-principle.jpg'
import Limbo from '../../img/imgs-games/limbo.jpg'

import Hollow from '../../img/imgs-games/hollow-knight.jfif'
import Messenger from '../../img/imgs-games/messenger.jpg'
import Momodora from '../../img/imgs-games/momodora.png'
import Ori from '../../img/imgs-games/ori.jpg'
import Blasphemous from '../../img/imgs-games/blasphemous.png'

import Dead from '../../img/imgs-games/dead-cells.png'
import Isaac from '../../img/imgs-games/binding-of-isaac.jpg'
import Hades from '../../img/imgs-games/hades.jpg'
import Neon from '../../img/imgs-games/neon-abyss.png'
import Gungeon from '../../img/imgs-games/enter-the-gungeon.jpg'

import Modal from 'react-modal'

import { useState, useEffect } from 'react'
import { Navbar } from '../../components/Navbar/Navbar'

import { BlasphemousTrailer, CelesteTrailer, DeadTrailer, GungeonTrailer, HadesTrailer, HollowTrailer, IsaacTrailer, LimboTrailer, MessengerTrailer, MomodoraTrailer, NeonTrailer, OriTrailer, PlagueTrailer, TalosTrailer, UndertaleTrailer } from '../../trailers/TrailersIndie'

Modal.setAppElement('#root');

export function Indie() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [modalPlagueIsOpen, setPlagueIsOpen] = useState(false)
    function showPlagueModal() {
        setPlagueIsOpen(true);
    }
    function closePlagueModal() {
        setPlagueIsOpen(false);
    }

    const [modalUnderIsOpen, setUnderIsOpen] = useState(false)
    function showUnderModal() {
        setUnderIsOpen(true);
    }
    function closeUnderModal() {
        setUnderIsOpen(false);
    }

    const [modalCelesteIsOpen, setCelesteIsOpen] = useState(false)
    function showCelesteModal() {
        setCelesteIsOpen(true);
    }
    function closeCelesteModal() {
        setCelesteIsOpen(false);
    }

    const [modalTalosIsOpen, setTalosIsOpen] = useState(false)
    function showTalosModal() {
        setTalosIsOpen(true);
    }
    function closeTalosModal() {
        setTalosIsOpen(false);
    }

    const [modalLimboIsOpen, setLimboIsOpen] = useState(false)
    function showLimboModal() {
        setLimboIsOpen(true);
    }
    function closeLimboModal() {
        setLimboIsOpen(false);
    }

    const [modalHollowIsOpen, setHollowIsOpen] = useState(false)
    function showHollowModal() {
        setHollowIsOpen(true);
    }
    function closeHollowModal() {
        setHollowIsOpen(false);
    }

    const [modalMessengerIsOpen, setMessengerIsOpen] = useState(false)
    function showMessengerModal() {
        setMessengerIsOpen(true);
    }
    function closeMessengerModal() {
        setMessengerIsOpen(false);
    }

    const [modalMomodoraIsOpen, setMomodoraIsOpen] = useState(false)
    function showMomodoraModal() {
        setMomodoraIsOpen(true);
    }
    function closeMomodoraModal() {
        setMomodoraIsOpen(false);
    }

    const [modalOriIsOpen, setOriIsOpen] = useState(false)
    function showOriModal() {
        setOriIsOpen(true);
    }
    function closeOriModal() {
        setOriIsOpen(false);
    }

    const [modalBlaspheIsOpen, setBlaspheIsOpen] = useState(false)
    function showBlaspheModal() {
        setBlaspheIsOpen(true);
    }
    function closeBlaspheModal() {
        setBlaspheIsOpen(false);
    }

    const [modalDeadIsOpen, setDeadIsOpen] = useState(false)
    function showDeadModal() {
        setDeadIsOpen(true);
    }
    function closeDeadModal() {
        setDeadIsOpen(false);
    }

    const [modalIsaacIsOpen, setIsaacIsOpen] = useState(false)
    function showIsaacModal() {
        setIsaacIsOpen(true);
    }
    function closeIsaacModal() {
        setIsaacIsOpen(false);
    }

    const [modalHadesIsOpen, setHadesIsOpen] = useState(false)
    function showHadesModal() {
        setHadesIsOpen(true);
    }
    function closeHadesModal() {
        setHadesIsOpen(false);
    }

    const [modalNeonIsOpen, setNeonIsOpen] = useState(false)
    function showNeonModal() {
        setNeonIsOpen(true);
    }
    function closeNeonModal() {
        setNeonIsOpen(false);
    }

    const [modalGungeonIsOpen, setGungeonIsOpen] = useState(false)
    function showGungeonModal() {
        setGungeonIsOpen(true);
    }
    function closeGungeonModal() {
        setGungeonIsOpen(false);
    }

    return (
        <div>
            <Navbar />
            <div className="game-on-top ">
                <h1 className='genIndie'>Indies</h1>
                <img src={Plague} alt="A Plague Tale"/>
                <div className="informations animate__animated animate__fadeInLeft">
                    <h3 onClick={showPlagueModal} className="informations-trailer">Assistir ao trailer</h3>
                    <h3 onClick={showPlagueModal} className="informations-more">Mais informações</h3>
                </div>
            </div>
            <section className="tags">
                <h3>Narrativa e temática envolvente</h3>
                <div className="tags-games">
                    <img onClick={showPlagueModal} src={Plague} alt="A Plague Tale"/>
                    <Modal
                        isOpen={modalPlagueIsOpen}
                        onRequestClose={closePlagueModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <PlagueTrailer />
                        <button onClick={closePlagueModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showUnderModal} src={Undertale} alt="Undertale"/>
                    <Modal
                        isOpen={modalUnderIsOpen}
                        onRequestClose={closeUnderModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <UndertaleTrailer />
                        <button onClick={closeUnderModal} className='close'>X</button>
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

                    <img onClick={showTalosModal} src={Talos} alt="Talos Principle"/>
                    <Modal
                        isOpen={modalTalosIsOpen}
                        onRequestClose={closeTalosModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <TalosTrailer />
                        <button onClick={closeTalosModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showLimboModal} className='final-img' src={Limbo} alt="Limbo"/>
                    <Modal
                        isOpen={modalLimboIsOpen}
                        onRequestClose={closeLimboModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <LimboTrailer />
                        <button onClick={closeLimboModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>

            <section className="tags">
                <h3>Metroidvania</h3>
                <div className="tags-games">
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

                    <img onClick={showMessengerModal} src={Messenger} alt="Messenger"/>
                    <Modal
                        isOpen={modalMessengerIsOpen}
                        onRequestClose={closeMessengerModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MessengerTrailer />
                        <button onClick={closeMessengerModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showMomodoraModal} src={Momodora} alt="Momodora"/>
                    <Modal
                        isOpen={modalMomodoraIsOpen}
                        onRequestClose={closeMomodoraModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <MomodoraTrailer />
                        <button onClick={closeMomodoraModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showOriModal} src={Ori} alt="Ori"/>
                    <Modal
                        isOpen={modalOriIsOpen}
                        onRequestClose={closeOriModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <OriTrailer />
                        <button onClick={closeOriModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showBlaspheModal} className='final-img' src={Blasphemous} alt="Blasphemous"/>
                    <Modal
                        isOpen={modalBlaspheIsOpen}
                        onRequestClose={closeBlaspheModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <BlasphemousTrailer />
                        <button onClick={closeBlaspheModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
            
            <section className="tags">
                <h3>Roguelike/Roguelite</h3>
                <div className="tags-games">
                    <img onClick={showDeadModal} className='last-imgs' src={Dead} alt="Dead Cells"/>
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

                    <img onClick={showIsaacModal} className='last-imgs' src={Isaac} alt="The Binding of Isaac"/>
                    <Modal
                        isOpen={modalIsaacIsOpen}
                        onRequestClose={closeIsaacModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <IsaacTrailer />
                        <button onClick={closeIsaacModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showHadesModal} className='last-imgs' src={Hades} alt="Hades"/>
                    <Modal
                        isOpen={modalHadesIsOpen}
                        onRequestClose={closeHadesModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <HadesTrailer />
                        <button onClick={closeHadesModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showNeonModal} className='last-imgs' src={Neon} alt="Neon Abyss"/>
                    <Modal
                        isOpen={modalNeonIsOpen}
                        onRequestClose={closeNeonModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <NeonTrailer />
                        <button onClick={closeNeonModal} className='close'>X</button>
                    </Modal>

                    <img onClick={showGungeonModal} className='last-imgs final-img' src={Gungeon} alt="Enter the Gungeon"/>
                    <Modal
                        isOpen={modalGungeonIsOpen}
                        onRequestClose={closeGungeonModal}
                        contentLabel="Example Modal"
                        overlayClassName="modal-overlay"
                        className="modal-content"
                    >
                        <GungeonTrailer />
                        <button onClick={closeGungeonModal} className='close'>X</button>
                    </Modal>
                </div>
            </section>
        </div>
    )
}