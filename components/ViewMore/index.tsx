"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal";

import './style.scss';

interface ViewMoreProps {
  content: string;
}

const ViewMore: React.FC<ViewMoreProps> = ({ content }) => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="moreButton"
      >
        Više...
      </button>
      <AnimatePresence initial={false} onExitComplete={() => null}>
        {open && (
          <Modal modalOpen={open} handleClose={closeModal} text={content} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ViewMore;
