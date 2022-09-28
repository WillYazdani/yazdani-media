import {motion} from 'framer-motion';
import slideOut from './slideOut';
import "./assets/images/1.jpg";


export default function Modal({handleClose}){
    return(
        <motion.div
            className="modal"
            initial={{x: "100vw"}}
            animate={{x: 0}}
            exit={{x: "100vw"}}
            transition={{duration: 0.5}}
        >
            <motion.div className="modal-content">
                <motion.button
                className="modal-close"
                whileHover={{
                    scale: 1.05,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
                whileTap={{
                    scale: 0.95,
                    transition: {
                        duration: 0.2,
                        ease: "easeInOut"
                    }
                }}
                // close modal on click
                
                onClick={handleClose}
                variants={slideOut}
                >
                Close
                </motion.button>

                <img
                src={require("./assets/images/1.jpg")}
                alt="modal-img-1"
                className="modal-img"
                />
                
            </motion.div>
        </motion.div>
        
                    
    )
}