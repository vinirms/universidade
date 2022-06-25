import styles from "./Matricula.module.css";

import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Rodape from "../../components/Rodape/Rodape";
import PreMatricula from "../../components/Matricula/PreMatricula";

const Matricula = () => {
  return (
    <>
      <NavBar />
      <PreMatricula />
      <Rodape />
    </>
  );
};

export default Matricula;
