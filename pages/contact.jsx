import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={style.container}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
      <h1 className={style.title}>Estamos a la orden</h1>
      <form className={style.form}>
        <input className={style.inputS} type="text" placeholder="Nombre" />
        <input className={style.inputS} type="text" placeholder="Telefono" />
        <input className={style.inputL} type="text" placeholder="Correo" />
        <input className={style.inputL} type="text" placeholder="Tema" />
        <textarea
          className={style.textArea}
          type="text"
          rows={6}
          placeholder="Message"
        />
        <button className={style.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
