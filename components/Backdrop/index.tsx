import "./style.scss";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface BackdropProps {
  children: ReactNode;
  onClick: () => void;
}

const backdropVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={backdropVariants}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
