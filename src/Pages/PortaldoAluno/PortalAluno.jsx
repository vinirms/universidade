import React from 'react'
import styles from './PortalAluno.module.css'
const PortalAluno = () => {
  return (
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
  )
}

export default PortalAluno