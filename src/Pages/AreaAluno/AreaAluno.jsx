import React, { useState } from "react";
import styles from "./AreaAluno.module.css";
import logo from "../../imagens/logo.png";
import { useAutenticacao } from "../../hooks/useAutenticacao";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";

const AreaAluno = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useAutenticacao();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      senha,
    };

    const resposta = await login(user);
  };

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
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <h1>Portal do Estudante</h1>
          </div>
          <form onSubmit={handleSubmit} className={styles.formItens}>
            <div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <div>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                />
              </div>
            </div>

            <Button conteudo="Entrar" alt={35} lar={80}></Button>
            <Link to="/matricula">Inscreva-se</Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AreaAluno;
