import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AutenticacaoProvider } from "./Context/useContextLogin";
import { useState, useEffect } from "react";
import { useAutenticacao } from "./hooks/useAutenticacao";
import { onAuthStateChanged } from "firebase/auth";

import NavBar from "./components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Rodape from "./components/Rodape/Rodape";
import Sobre from "./Pages/Sobre/Sobre";
import Contato from "./Pages/Contato/Contato";
import AreaAluno from "./Pages/AreaAluno/AreaAluno";
import PortalAluno from "./Pages/PortaldoAluno/PortalAluno";
import Matricula from "./Pages/PreMatricula/Matricula";

function App() {
  const [user, setUser] = useState(undefined);
  const { autenticar } = useAutenticacao();
  const carregandoUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(autenticar, (user) => {
      setUser(user);
    });
  }, [autenticar]);

  if (carregandoUser) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <AutenticacaoProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route
              path="/areadoaluno"
              element={!user ? <Matricula /> : <Navigate to={"/portal"} />}
            />
            <Route path="/portal" element={<PortalAluno />} />
            <Route path="/matricula" element={<Matricula />} />
          </Routes>
          <Rodape />
        </BrowserRouter>
      </AutenticacaoProvider>
    </>
  );
}

export default App;
