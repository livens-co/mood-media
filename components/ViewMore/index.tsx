"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal";

import "./style.scss";
import ModalWhite from "../ModalWhite";

interface ViewMoreProps {
  content: string;
  modalType: "default" | "white";
}

const ViewMore: React.FC<ViewMoreProps> = ({
  content,
  modalType = "default",
}) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };

  const ModalComponent = modalType === "white" ? ModalWhite : Modal;

  return (
    <>
      <button onClick={() => setOpen(!open)} className="moreButton">
        Više...
      </button>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {open && (
          <ModalComponent
            modalOpen={open}
            handleClose={closeModal}
            text={content}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ViewMore;
