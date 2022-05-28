import style from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className={style.container}>
      {/* <div className={`${style.circle} ${style.circle1}`} />
      <div className={`${style.circle} ${style.circle2}`} /> */}
      <Circle backgroundColor="#0c9fc4" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={style.card}>
        <div className={style.title}>
          <p>AF</p> 
          <b >
          <div className={style.brandName}>
          Resguardo<br /> 
            Control<br />
            Ciberseguridad <br />
            Integridad<br />
            Empezemos!
          </div>
          </b>

        </div>
        <p className={style.desc}>
          El equipo de trabajo AF es un equipo de investigadores y profesionales en el area que estan a su disposicion.
        </p>
       
      </div>
      <div className={style.card1}>
        <Image
          src="/img/titu.png"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
