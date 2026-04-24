import Image from "next/image";
import Header from "./Components / Header/Header";
import Inicio from "./Components / Inicio/Inicio";
import Intereses from "./Components / Intereses/Intereses";
import CV from "./Components / CV/CV";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Intereses />
      <CV />
    </>
  );
}
