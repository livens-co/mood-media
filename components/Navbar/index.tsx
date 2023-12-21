import Image from "next/image";
import "./style.scss";
import Link from "next/link";

const navLinks = [
    // {
    //     name: "Gen Z Akademija",
    //     path: "/akademija",
    // },
    {
        name: "O nama",
        path: "/o-nama",
    },
    {
        name: "Usluge",
        path: "/usluge",
    },
    
    {
        name: "Kreatori",
        path: "/kreatori",
    },
    {
        name: "Novosti",
        path: "/novosti",
    },
    
]

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <nav>
          <Link href='/' className="logo">
            <Image priority src='/assets/mmedia.png' width={100} height={100} alt="Mood Media"/>
          </Link>
          <div className="links">
          <Link href='/akademija' className="akademijaLink">
            <Image priority src='/assets/akademijaLink.png' width={100} height={13} alt="Gen Z Akademija"/>
          </Link>
            {navLinks.map(l => (
                <Link href={l.path} key={l.path} className="navLink">
                    {l.name}
                </Link>
            ))}
            <div className="line"/>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
