import React, { useState } from 'react'
import styles from './AreaAluno.module.css'
import Button from '../../components/Button/Button'
import logo from '../../imagens/logo.png'
import { Link } from 'react-router-dom'


const AreaAluno = () => {

  const btnAreaAluno = styles.btnAluno
 
  return (
    <section className={styles.container}>
        <div className={styles.ladoEsquerdo}>
          
          <div className={styles.imageContainer}>
              <div className={styles.card}>
                  <div className={styles.cardImage}>
                     <h1>bem vindo</h1>
                  </div>
              </div>
          </div>
        </div>

        <div className={styles.formContainer}>
            <div className={styles.ladoDireito}>
              <div >
                <img src={logo} alt="" />
              </div>
              <div>
                <h1>Portal do Estudante</h1>
              </div>
              <form className={styles.formItens}>
                  <div>
                    <label htmlFor="nome">Nome:</label>
                      <div>
                        <input 
                        type="text" 
                        name="nome" 
                        id="nome" 
                        onChange={(e)=>{setUser(e.target.value)}}/>
                      </div>
                  </div>
                  <div>
                    <label htmlFor="senha">Senha:</label>
                    <div>
                      <input 
                      type="password" 
                      name="senha" 
                      id="senha" 
                      onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                  </div>
              
                  <Link to="/portal">
                  <Button conteudo={"Entrar"} lar={100} alt={40} btn={btnAreaAluno} />
                  </Link>
              </form>
            </div>
        </div>
    </section>
  )
}

export default AreaAluno