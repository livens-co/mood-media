import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

import "./style.scss";

interface ModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  text: string;
}

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal: React.FC<ModalProps> = ({ handleClose, modalOpen, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={handleClose}>Zatvori</button>
        <div className="modalContent">

        <p>{text}</p>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
