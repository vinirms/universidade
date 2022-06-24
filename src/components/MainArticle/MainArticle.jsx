import React from 'react'
import capa from '../../imagens/capa.png'
import professor from '../../imagens/img2.jpg'
import Button from '../Button/Button'
import styles from './MainArticle.module.css'

const MainArticle = () => {

  const botaoArticle = styles.botaoReciclavel
  const botaoModalidade = styles.botaoModalidade
  
  return (
    <article className={styles.mainArticle}>
        <div className={styles.imgContainer}>
            <div className={styles.imgWrapper}>
            <img src={capa} alt="Imagem de capa sobre tecnologia" />
            </div>
        </div>
        <div className={styles.modalidade}>
          <h1>Escolha uma modalidade</h1>
          <div className={styles.opcoes}>
              <select name="cursos" id="curso">
                  <option value="Graduaçao">Graduação</option>
                  <option value="Pós-Graduaçao">Pós-Graduação</option>
              </select>
              <input type="search" placeholder='Digite aqui seu curso' />
             <Button conteudo={"Inscreva-se"} lar={150} alt={40} btn={botaoModalidade}/>
         </div>
        </div>

        <div className={styles.mainConteudo}>
          <div className={styles.conteudoInfo}>
              <h1>Contamos com uma equipe de professores renomados</h1>
              <p>Com a UNES, você aprenderá com os melhores professores que te ensinarão de maneira prática e rápida, através de metodologias atívas.</p>
          <Button 
            conteudo={"Saiba mais"} 
            lar={150} alt={40} 
            btn={botaoArticle}
            />
          </div>
          <img src={professor} alt="Professor escrevendo em quadrao" />
        </div>

    </article>
  )
}

export default MainArticle