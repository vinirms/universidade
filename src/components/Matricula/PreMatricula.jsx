import styles from "./PreMatricula.module.css";

import React from "react";
import { useState } from "react";
import { useAutenticacao } from "../../hooks/useAutenticacao";

const PreMatricula = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  const { criarUser } = useAutenticacao();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuario = {
      nome,
      email,
      senha,
      confirmacao,
    };

    console.log(usuario);
  };

  return (
    <main className={styles.pre_matricula}>
      <div className={styles.container}>
        <h1>Pré- Matrícula</h1>
        <div className={styles.form_matricula_container}>
          <form onSubmit={handleSubmit} className={styles.form_matricula}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu nome"
              required
              onChange={(e) => setNome(e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Digite seu email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              required
              placeholder="Digite sua senha"
              onChange={(e) => setSenha(e.target.value)}
            />

            <label htmlFor="confirmacao">Confirme sua Senha</label>
            <input
              type="password"
              name="confirmacao"
              required
              placeholder="Confirme sua senha"
              onChange={(e) => setConfirmacao(e.target.value)}
            />

            <button>Cadastrar</button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default PreMatricula;
