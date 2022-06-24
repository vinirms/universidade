import React from 'react'
import MainArticle from '../../components/MainArticle/MainArticle'
import NavBar from '../../components/NavBar/NavBar'
import Rodape from '../../components/Rodape/Rodape'
import SessaoLab from '../../components/SessaoLab/SessaoLab'


const Home = () => {
  return (
    <>
      <NavBar/>
      <MainArticle/>
      <SessaoLab/>
      <Rodape/>
    </>
  )
}

export default Home