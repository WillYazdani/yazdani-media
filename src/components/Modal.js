import {motion} from 'framer-motion';
import {GoChevronLeft, GoChevronRight, GoX} from 'react-icons/go';
import "../assets/images/1.jpg";
import "../CSS/modal.css";


export default function Modal({handleClose}){

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

            <motion.div className="modal-content">

                {/* left */}
                <motion.button className="modal-nav-btn-left">
                    <GoChevronLeft />
                </motion.button>

                {/* image */}
                <img
                src={require("../assets/images/1.jpg")}
                alt="modal-img-1"
                className="modal-img"
                />

                {/* right */}
                <motion.button className="modal-nav-btn-right">
                    <GoChevronRight />
                </motion.button>
                
            </motion.div>

        </motion.div>
                     
    )
}