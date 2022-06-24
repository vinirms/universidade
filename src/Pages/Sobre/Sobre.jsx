import React from 'react'
import sobre from '../../imagens/sobre.jpg'
import missao from '../../imagens/missao.jpg'
import visao from '../../imagens/visao.jpg'
import styles from './Sobre.module.css'
import NavBar from '../../components/NavBar/NavBar'
import Rodape from '../../components/Rodape/Rodape'

const Sobre = () => {
  return (
    <>
    <NavBar/>
    <section className={styles.sobreConteudo}>
      <div className={styles.sobreImgCapa}>
        <img src={sobre} alt="" />
      </div>
      <hr />
      <div className={styles.sobreTextos}>
        <h1>Historia da Unes</h1>
        <div>
            <div className={styles.missaoVisao}>
              <div className={styles.missaoVisaoParagrafo}>
                <h2>Missao</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo, explicabo maxime beatae quas ad, quibusdam omnis fuga odio, tenetur cupiditate corrupti! Obcaecati libero error a, officia quae nostrum omnis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, numquam!</p>
                <div>
                  <img src={visao} alt="" />
                </div>
              </div>
              <div className={styles.missaoVisaoParagrafo}>
                <h2>Visao</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo, explicabo maxime beatae quas ad, quibusdam omnis fuga odio, tenetur cupiditate corrupti! Obcaecati libero error a, officia quae nostrum omnis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, numquam!</p>
                <div>
                  <img src={missao} alt="" />
                </div>
              </div>
            </div>
          <div className={styles.valoresObjetivos}>
              <div className={styles.valoresObjetivosParagrafo}>
                <h2>Valores</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo, explicabo maxime beatae quas ad, quibusdam omnis fuga odio, tenetur cupiditate corrupti! Obcaecati libero error a, officia quae nostrum omnis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, numquam!</p>
              </div>
              <div className={styles.valoresObjetivosParagrafo}>
                <h2>Objetivos e Metas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo, explicabo maxime beatae quas ad, quibusdam omnis fuga odio, tenetur cupiditate corrupti! Obcaecati libero error a, officia quae nostrum omnis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, numquam!</p>
              </div>
          </div>
        </div>
        
        
      </div>
    </section>
    <Rodape/>
    </>
  )
}

export default Sobre