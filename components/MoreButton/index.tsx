"use client";

import { useState } from "react";
import MoreModal from "../MoreModal";

const MoreButton = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(!open);
  };

  console.log(open);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Više...</button>
      {open && <MoreModal modalOpen={open} handleClose={closeModal} />}
    </>
  );
};

export default MoreButton;
