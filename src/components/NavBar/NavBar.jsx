import React from 'react'
import Logo from '../../imagens/logo.png'
import styles from './NavBar.module.css'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
// Paginas
import Contato from '../../Pages/Contato/Contato'
import AreaAluno from '../../Pages/AreaAluno/AreaAluno'
import Home from '../../Pages/Home/Home'
import Sobre from '../../Pages/Sobre/Sobre'



const NavBar = () => {

 const botaoNavBar = styles.botaoReciclavel

  return (
    <nav className={styles.navBar}>
        <img src={Logo} alt="Logo Universidade" />
        <div>
            <ul>
                <Link className={styles.hoverBorder} to="/">Home</Link>
                <Link className={styles.hoverBorder} to="/sobre">Sobre</Link>
                <Link className={styles.hoverBorder} to="/contato">Contato</Link>
                <Link to="/areadoaluno">
                  <Button 
                    conteudo={"Area do Aluno"}
                    alt={35} lar={160} 
                    btn={botaoNavBar}/>
                </Link>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar