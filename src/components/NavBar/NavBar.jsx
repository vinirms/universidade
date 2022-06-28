import React from "react";
import Logo from "../../imagens/logo.png";
import styles from "./NavBar.css";
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
import { useState } from "react";

const NavBar = () => {
  const { user } = useAutenticacaoValue();
  const { logout } = useAutenticacao();

  //menu hamburguer
  const [active, setActive] = useState("navMenu");
  const [toggleIcon, setToggleIcon] = useState("navToggle");
  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

    toggleIcon === "navToggle"
      ? setToggleIcon("navToggle toggle")
      : setToggleIcon("navToggle");
  };

  return (
    <nav className="navBar" id="nav">
      <img src={Logo} alt="Logo Universidade" />
      <div>
        <ul className={active}>
          {!user && (
            <>
              <NavLink className="hoverBorder" to="/">
                Home
              </NavLink>
              <NavLink className="hoverBorder" to="/sobre">
                Sobre
              </NavLink>
              <NavLink className="hoverBorder" to="/contato">
                Contato
              </NavLink>
              <NavLink to="/areadoaluno">
                <Button
                  conteudo={"Area do Aluno"}
                  alt={35}
                  lar={160}
                  btn={"botaoReciclavel"}
                />
              </NavLink>
            </>
          )}
          {user && (
            <>
              <NavLink className="hoverBorder" to="/">
                Home
              </NavLink>
              <NavLink className="hoverBorder" to="/sobre">
                Sobre
              </NavLink>
              <NavLink className="hoverBorder" to="/contato">
                Contato
              </NavLink>
              <NavLink className="hoverBorder" to="/portal">
                Portal
              </NavLink>
              <Link to="/areadoaluno">
                <Button
                  onc={logout}
                  conteudo={"Sair"}
                  alt={35}
                  lar={60}
                  btn={"botaoReciclavel"}
                />
              </Link>
            </>
          )}
        </ul>
      </div>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="trace1"></div>
        <div className="trace2"></div>
        <div className="trace3"></div>
      </div>
    </nav>
  );
};

export default NavBar;
