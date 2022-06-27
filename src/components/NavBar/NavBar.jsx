import React from "react";
import Logo from "../../imagens/logo.png";
import styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";
// Paginas
import Contato from "../../Pages/Contato/Contato";
import AreaAluno from "../../Pages/AreaAluno/AreaAluno";
import Home from "../../Pages/Home/Home";
import Sobre from "../../Pages/Sobre/Sobre";

//hook
import { useAutenticacaoValue } from "../../Context/useContextLogin";
import { useAutenticacao } from "../../hooks/useAutenticacao";

const NavBar = () => {
  const botaoNavBar = styles.botaoReciclavel;

  const { user } = useAutenticacaoValue();
  const { logout } = useAutenticacao();

  return (
    <nav className={styles.navBar}>
      <img src={Logo} alt="Logo Universidade" />
      <button className={styles.btnMobile}>
        <div className={styles.trace}></div>
        <div className={styles.trace}></div>
        <div className={styles.trace}></div>
      </button>
      <div>
        <ul>
          {!user && (
            <>
              <NavLink className={styles.hoverBorder} to="/">
                Home
              </NavLink>
              <NavLink className={styles.hoverBorder} to="/sobre">
                Sobre
              </NavLink>
              <NavLink className={styles.hoverBorder} to="/contato">
                Contato
              </NavLink>
              <NavLink to="/areadoaluno">
                <Button
                  conteudo={"Area do Aluno"}
                  alt={35}
                  lar={160}
                  btn={botaoNavBar}
                />
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className={styles.hoverBorder} to="/">
                Home
              </NavLink>
              <NavLink className={styles.hoverBorder} to="/sobre">
                Sobre
              </NavLink>
              <NavLink className={styles.hoverBorder} to="/contato">
                Contato
              </NavLink>
              <NavLink className={styles.hoverBorder} to="/portal">
                Portal
              </NavLink>
              <Link to="/areadoaluno">
                <Button
                  onc={logout}
                  conteudo={"Sair"}
                  alt={35}
                  lar={60}
                  btn={botaoNavBar}
                />
              </Link>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
