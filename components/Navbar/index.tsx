"use client";

import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { useState } from "react";
import Menu from "../Menu";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Početna",
    path: "/",
  },
  {
    name: "Kreatori",
    path: "/kreatori",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Usluge",
    path: "/usluge",
  },
  {
    name: "O nama",
    path: "/o-nama",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
];

const Navbar = () => {
  const pathName = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const closeMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <div className="navbar">
        <nav>
          <Link href="/" className="logo">
            <Image
              priority
              src="/assets/mmedia.png"
              width={100}
              height={100}
              alt="Mood Media"
            />
          </Link>
          <div className="links">
            <Link href="/akademija" className="akademijaLink">
              <Image
                priority
                src="/assets/genZAkademijaLogo.png"
                width={125}
                height={30}
                alt="Gen Z Akademija"
              />
            </Link>
            {navLinks
              .map((l) => (
                <Link href={l.path} key={l.path} 
                // className="navLink" 
                className={`navLink ${pathName === l.path ? 'active' : ''}`}
                >
                  {l.name}
                </Link>
              ))
              .slice(1, -1)}
            <div className="line" />
            <Link href="/kontakt">Kontakt</Link>
          </div>
          <div
            className={openMenu ? "menuButton activeButton" : "menuButton "}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <div />
            <div />
            <div />
          </div>
        </nav>
      </div>
      <Menu openMenu={openMenu} closeMenu={closeMenu} navLinks={navLinks} />
    </>
  );
};

export default Navbar;
