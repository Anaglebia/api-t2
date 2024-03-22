import styled from "styled-components"

export const Cinema = styled.section`
display: flex;
flex-wrap:wrap;
justify-content: space-evenly;
background-color: #e663e6;
`

export const Filmes = styled.div`
border: solid red 4px;
width: 20vw;
height: 70vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
margin: 1rem;
background-color: greenyellow;
border-radius: 40px;
background-image: url("https://yata-apix-cbb6b702-ef1a-4258-908c-6cfa93768a5c.s3-object.locaweb.com.br/13ccb0ed6a4c4b8b8d6e06bab0378823.png");
background-repeat: no-repeat;
background-position: center;
background-size: 50%;

h2{
    text-align: center;
}
;
`