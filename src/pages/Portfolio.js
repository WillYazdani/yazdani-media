import React, {useState} from 'react';
import "../CSS/portfolio.css";
import "../CSS/modal.css";
import Modal from "../Modal";
import {motion, AnimatePresence} from "framer-motion";

export default function Portfolio() {
    const [modalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false)
    const open = () => setModalOpen(true)
    return (
        <>
            <AnimatePresence
                initial={false}
                exitBeforeEnter={true}
                onExitComplete={() => null}
                >
                {modalOpen && <Modal modalOpen={modalOpen} handleClose={close}></Modal>}
            </AnimatePresence>

            <div className="portfolio-container">

                <div
                className="image-container"
                onClick={() => (modalOpen ? close() : open())}
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