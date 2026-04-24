import Image from "next/image";
import Header from "./Components / Header/Header";
import Inicio from "./Components / Inicio/Inicio";
import Intereses from "./Components / Intereses/Intereses";
import CV from "./Components / CV/CV";
import Proyectos from "./Components / Proyectos/Proyectos";
import Contacto from "./Components / Contacto/Contacto";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Intereses />
      <CV />
      <Proyectos />
      <Contacto />
    </>
  );
}
