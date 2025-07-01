import React from 'react'
import Header from "../components/Header";
import styled  from 'styled-components';



const ConfirmBackground = styled.div`
  background-color: #CE2829;
  height: 100vh;
  width: 100vw;
`

const ConfirmText = styled.h1`
  display: flex; 
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-family: 'Barlow', sans-serif;
  font-weight: 100;
  font-style: normal;
  margin-top: 100px
  
`

function Confirmation() {
  return (
    <ConfirmBackground>
    <Header/>

    <ConfirmText>
      TEBRİKLER! <br/> SİPARİŞİNİZ ALINDI!</ConfirmText>

    </ConfirmBackground>
  )
}

export default Confirmation