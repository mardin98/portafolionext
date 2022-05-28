import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>Almacenamiento Forense.</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" className={style.link} passHref>
            <>
              <span className={style.linkText}>Comunicate con nosotros</span>
              <Image
                src="/img/link.png"
                width="100%"
                height="100"
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          Santa Rosa de Lima,
          <br /> Sv
        </div>
        <div className={style.cardItem}>
          AF@gmail,com
          <br /> 7214-6542
        </div>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          Siguenos:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={style.cardItem}>
          © 2022 ,
          <br />
          Derechos reservados
        </div>
      </div>
    </div>
  );
};

export default Footer;
