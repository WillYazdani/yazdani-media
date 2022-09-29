import React, {useState} from 'react';
import "../CSS/portfolio.css";
import "../CSS/modal.css";
import Modal from "../components/Modal";
import Modal2 from "../components/Modal2";
import {AnimatePresence} from "framer-motion";

export default function Portfolio() {

    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)

    const [modalOpen2, setModalOpen2] = useState(false)
    const close2 = () => setModalOpen2(false)
    const open2 = () => setModalOpen2(true)

    return (
        <>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
                >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}></Modal>}
            </AnimatePresence>

            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
                >
                {modalOpen2 && <Modal2 modalOpen2={modalOpen2} handleClose={close2}></Modal2>}
            </AnimatePresence>

            <div className="portfolio-container">

                <div
                className="image-container"
                onClick={() => (modalOpen ? close() : open())}
                >
                </div>

                <div
                className="image-container"
                onClick={() => (modalOpen2 ? close2() : open2())}
                >
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

                <div className="image-container">
                </div>

            </div>
        </>
    )
}