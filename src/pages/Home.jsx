
import banner from '../../images/iteration-1-images/home-banner.png';
import styled from 'styled-components';
import Header from "../components/Header";

const Background = styled.div`
  background-image: url(${banner});
  background-size: contain;
  background-position: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;


const BannerText = styled.h1`
  text-align: center;
  color: white;
  font-size: 3rem;
  font-family: 'Barlow', sans-serif;
  font-weight: 100;
  font-style: normal;
`;

const OrderButton = styled.button`
  border: 1px solid #FDC913 ;
  background-color: #FDC913;
  display: flex;
  margin: 40px auto;
  padding: 10px 30px;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #ffb202;
`


function Home() {
  return (

    <Background>
      <Header/>
      <BannerText>
        KOD ACIKTIRIR <br />
        PİZZA, DOYURUR
      </BannerText>
      <OrderButton>
        ACIKTIM
      </OrderButton>
    </Background>
  
  
  )
}

export default Home