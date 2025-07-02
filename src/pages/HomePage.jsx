import React from 'react'
import Home from './Home';
import styled from 'styled-components';


const HomeWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-start; 
  justify-content: center;
  overflow: hidden;
`

const ScaledContainer = styled.div`
  transform: scale(0.50); /* %33'e küçült */
  transform-origin: top center; /* üstten hizalanarak küçülsün */
`;

const PageBackground = styled.div`
  background-color: #CE2829;
  width: 100vw;
  height: 50vh;
`

function HomePage() {
  return (
<PageBackground>
    <HomeWrapper>
      <ScaledContainer>
      <Home/>     
       </ScaledContainer>
      </HomeWrapper>
  </PageBackground>
  
  )
}

export default HomePage