import { useState } from "react";
import style from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.container}>
      <div ><Link href="/"><img width={40} height={40} src="/img/icons.png" alt="" /></Link></div>
      <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/Almacenamiento">ALMACENAMIENTO</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/C-R">CONTROL Y REGISTRO</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACTO</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/Almacenamiento">ALMACENAMINETO</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/C-R">CONTROL Y REGISTRO</Link>
        </li>
        
        <li className={style.menuItem}>
          <Link href="/contact">CONTACTO</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
