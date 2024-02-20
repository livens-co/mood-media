import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

import "./style.scss";

interface ModalWhiteProps {
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

const ModalWhite: React.FC<ModalWhiteProps> = ({ handleClose, modalOpen, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modalWhite"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button onClick={handleClose}>Zatvori</button>
        {/* <p>{text}</p> */}
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </motion.div>
    </Backdrop>
  );
};

export default ModalWhite;
