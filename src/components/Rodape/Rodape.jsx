import React from 'react'
import logo from '../../imagens/logo.png'
import styles from './Rodape.module.css'
import { Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home'
import Sobre from '../../Pages/Sobre/Sobre'
import Contato from '../../Pages/Contato/Contato'
import AreaAluno from '../../Pages/AreaAluno/AreaAluno'

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
        <div className={styles.conteudoRodape}>
            <div className={styles.rodapeEndereço}>
              <img src={logo} alt="" />
              <p>Avenida Central, 452, <br /> Pinheiros - CEP: 40000.222 <br /> Salvador-BA</p>
            </div>
            <div className={styles.rodapeNav}>
              <h1>UNES</h1>
              <ul>
                <div className={styles.rodapeNavItens}>
                  <div>
                      <Link to="/">Home</Link>
                      <Link to="/sobre">Sobre</Link>
                  </div>
                  <div>
                  <Link to="/contato">Contato</Link>
                  <Link to="/areadoaluno">Portal do Aluno</Link>
                  </div>
                </div>
              </ul>
            </div>
            <div>
              <h1>Redes Sociais</h1>

            </div>
        </div>
     
    </footer>
  )
}

export default Rodape