import React from 'react';
import {motion} from 'framer-motion';
import {GoX} from 'react-icons/go';
// import {GoChevronLeft, GoChevronRight} from 'react-icons/go';
// import Modal2 from "../components/Modal2";
import "../assets/images/1.jpg";
import "../CSS/modal.css";

export default function Modal2({handleClose}){

    document.body.style.overflow = "hidden";

    const handleScroll = () => {
        document.body.style.overflow = "unset";
    }

    const fadeOut = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
    }
    
    return(
        <motion.div
        className="modal"
        variants={fadeOut}
        initial="hidden"
        animate="visible"
        exit="exit"
        >

            <motion.div className="modal-content">

                {/* left */}
                {/* <motion.button
                className="modal-nav-btn-left"
                onClick={() => {
                    handleClose();
                }}
                >
                    <GoChevronLeft />
                </motion.button> */}

                {/* image */}
                <img
                src={require("../assets/images/2.jpg")}
                alt="modal-img-1"
                className="modal-img"
                />

                {/* right */}
                {/* <motion.button
                className="modal-nav-btn-right"
                onClick={() => {
                    handleClose();
                    Modal2();
                }}
                >
                    <GoChevronRight />
                </motion.button> */}

                {/* close */}
                <motion.button
                className="modal-close"
                onClick={() => {
                    handleClose();
                    handleScroll();
                }}
                >
                    <GoX />
                </motion.button>
                
            </motion.div>

        </motion.div>
                     
    )
}