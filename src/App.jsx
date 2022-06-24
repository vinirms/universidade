import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar"
import Home from "./Pages/Home/Home"
import Rodape from "./components/Rodape/Rodape"
import Sobre from "./Pages/Sobre/Sobre"
import Contato from "./Pages/Contato/Contato"
import AreaAluno from "./Pages/AreaAluno/AreaAluno"
import PortalAluno from './Pages/PortaldoAluno/PortalAluno'


function App() {
  

  return (
    <>
    <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/areadoaluno" element={<AreaAluno/>}/>
          <Route path='/portal' element={<PortalAluno/>}/>
        </Routes>
        {/* <Rodape/> */}
     </BrowserRouter>
    </>
  )
}

export default App
