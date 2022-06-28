import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Rodape from "../../components/Rodape/Rodape";
import styles from "./PortalAluno.module.css";

const PortalAluno = () => {
  return (
    <>
      <NavBar />
      <main className={styles.portalContainer}>
        <header className={styles.headerPortal}>
          <nav className={styles.navPortal}>
            <ul>
              <li>Dados academicos</li>
              <li>Dados Financeiros</li>
              <li>Biblioteca Virtual</li>
              <li>Atividades Complementares</li>
            </ul>
          </nav>
        </header>
      </main>
    </>
  );
};

export default PortalAluno;
