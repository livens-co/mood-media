"use client";

import "./style.scss";
import logos from "@/lib/logos";
import Image from "next/image";

const RowLogo = () => {
  return (
    <div className="logoRowContainer">
      <div className="logoRow">
        {logos.map((logo) => (
          <Image
            src={logo.imagePath}
            alt="Logo"
            width={150}
            height={100}
            key={logo.id}
          />
        )).slice(0,30)}
      </div>
      <div className="logoRow">
        {logos.map((logo) => (
          <Image
            src={logo.imagePath}
            alt="Logo"
            width={150}
            height={100}
            key={logo.id}
          />
        )).slice(30, -1)}
      </div>
    </div>
  );
};

export default RowLogo;
