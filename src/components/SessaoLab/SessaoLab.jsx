import styles from'./SessaoLab.module.css'
import lab1 from '../../imagens/lab1.jpg'
import lab2 from '../../imagens/lab2.jpg'
import sala1 from '../../imagens/sala1.jpg'
import sala2 from '../../imagens/sala2.jpg'
import campus from '../../imagens/campus.jpg'
import social from '../../imagens/area social.jpg'




const SessaoLab = () => {
  return (
    <section className={styles.sessaoEstrutura}>
        <div className={styles.conteudoSessao}>
            <div className={styles.conteudoSessaoImg}>
                <img src={lab1} alt="" />
                <img src={lab2} alt="" />
            </div>
            <p>Contamos com laboratórios com alta tecnologia para a realização das atividades</p>
        </div>
        <div className={styles.conteudoSessao}>
            <p>Sala de aula com assentos confortáveis e climatizada.</p>
            <div className={styles.conteudoSessaoImg}>
                <img src={sala1} alt="" />
                <img src={sala2} alt="" />
            </div>
        </div>
        <div className={styles.conteudoSessao}>
            <div className={styles.conteudoSessaoImg}>
                <img src={campus} alt="" />
                <img src={social}alt="" />
            </div>
            <p>Nosso campus contem diversas áreas socias que possibilita o contato com a natureza.</p>
        </div>
    </section>
  )
}

export default SessaoLab