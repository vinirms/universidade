import db from "../firebase/FirebaseConf";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { async } from "@firebase/util";

const autenticacao = () => {
  const autenticar = getAuth();

  const criarUser = async (data) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        autenticar,
        data.email,
        data.senha
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async (data) => {
    try {
      await signInWithEmailAndPassword(autenticar, data.email, data.senha);
    } catch (error) {
      console.log(error.message);
    }
  };

  return { criarUser, login };
};
