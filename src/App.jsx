//API (INTERFACE DE APLICAÇÃO DE PROGRAMAÇÃO) É UM SERVIÇO QUE PERMITE CONSUMIR DADOS DE UM OUTRO LOCAL, DADO COMO: IMAGENS, TÍTULOS, DESCRIÇÃO...

//AXIOS: É UMA BIBLIOTECA QUE PERMITE FAZER A LIGAÇÃO ENTRE O CLIENTE (A GENTE - FRONT) E O SERVIDOR (BANCO DE DADOS)

import React, { useState, useEffect } from "react"
import axios from "axios"
import * as S from "./StyleApi.jsx"
import {createGlobalStyle} from "styled-components"
const GlobalStyle = createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
`

function App() {

  //Esse array [] vai guardar as informações que forem puxadas da API
  const [data, setData] = useState([])

  const getData = async () => {

    const resp = await axios.get('https://api.sampleapis.com/movies/comedy')
    setData(resp.data)

    console.log(resp)

  }

  //ASYNC é uma função que nao e sincronizada coma página, ou seja, nao depende da página para ser ativada, depende somente dos dados vindo da Api

  //await = espere
  //get = pegue/pegar
  //espere o axios pegar os dados da api de filmes e guarde dentro da variável "resp"

  //setData é a forma de atualizar o estado(data), resp são as informações da API. então, pegue os dados da API (resp) e coloque no meu estado (data)


  //O HOOK USEEFFECT PERMITE QUE EXECUTAMOS EFEITOS COLATERAIS EM COMPONENTES FUNCIONAIS. NESTE CASO, QUEREMOS CARREGAR OS DADOS ASSIM QUE O COMPONENTE FUNCIONAL FOR MONTADO.
  //O ARRAY VAZIO [] SERVE COMO ARGUMENTO PARA GARANTIR QUE O EFEITO SEJA EXECUTADO APENAS UMA VEZ.

  useEffect(() => {
    getData()
  }, [])


  return (
    <S.Cinema>
      <GlobalStyle />

      {data.map((item) => (
        <S.Filmes>
          <img src={item.posterURL} alt="" />
          <h2> {item.title} </h2>
        </S.Filmes>

      ))}

    </S.Cinema>
  )
}

export default App