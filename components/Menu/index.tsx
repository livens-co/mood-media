import Link from "next/link";
import "./style.scss";
import Image from "next/image";

interface MenuProps {
  openMenu: boolean;
  closeMenu: () => void;
  navLinks: { name: string; path: string }[];
}

const Menu: React.FC<MenuProps> = ({ openMenu, navLinks, closeMenu }) => {
  return (
    <div className="menuOverlay" style={{ right: openMenu ? "0" : "-100vw" }}>
      {navLinks.map((l, i) => (
        <Link
          href={l.path} 
          key={l.path}
          onClick={closeMenu}
          className="menuLink"
        >
          <h3>0{i + 1}</h3> 
          <p>{l.name}</p>
        </Link>
      ))}
      <Link href="/akademija" className="menuLink" onClick={closeMenu}>
        <h3>07</h3>
        <Image
          priority
          src="/assets/genZAkademijaLogo.png"
          width={150}
          height={50}
          alt="Gen Z Akademija"
        />
      </Link>
    </div>
  );
};

export default Menu;
