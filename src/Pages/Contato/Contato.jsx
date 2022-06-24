import React from 'react'
import Button from '../../components/Button/Button'
import NavBar from '../../components/NavBar/NavBar'
import Rodape from '../../components/Rodape/Rodape'
import styles from './Contato.module.css'

const Contato = () => {

  const btnForm = styles.btnForm

  return (
    <>
      <NavBar/>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <h1>Entre em Contato</h1>
          <form className={styles.formItens}>
            <div className={styles.formName} >
              <label htmlFor="nome">Nome:</label>
                <input type="text" name='nome' id='nome' placeholder='Digite seu nome' />
            </div>
            <div className={styles.formEmail}>
              <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"  placeholder='exemplo@gmail.com'/>
            </div>
            <div className={styles.formContato}>
              <label htmlFor='contato' >Numero para Contato:</label>
              <input type="text" name="contato" id="contato" placeholder='(DDD) 00000000'/>
            </div>
            <div className={styles.formAluno}>
              <span>Voce é nosso aluno ?</span>
              <div>
                <label >Sim
                  <input type="checkbox" name="sim" id="sim" />
                </label>
                <label >Nao
                    <input type="checkbox" name="nao" id="nao" />
                 </label>
              </div>
      
            </div>
            <div style={{borderTop: "2px solid gray", marginTop: "20px"}}></div>
            <div  className={styles.formMensagem}>
              <label htmlFor='mensagem' >Digite sua mensagem:</label>
              <textarea name="mensagem" id="mensagem" ></textarea>
            </div>
      
          </form>
          <Button  conteudo={"Enviar"} lar={100} alt={40} btn={btnForm}/>
        </div>
      </div>
      <Rodape/>
    </>
  )
}

export default Contato