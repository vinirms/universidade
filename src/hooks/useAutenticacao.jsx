import db from "../firebase/FirebaseConf";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { async } from "@firebase/util";

export const useAutenticacao = () => {
  const autenticar = getAuth();

  const criarUser = async (data) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        autenticar,
        data.email,
        data.senha
      );

      return user;
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

  return { autenticar, criarUser, login };
};
