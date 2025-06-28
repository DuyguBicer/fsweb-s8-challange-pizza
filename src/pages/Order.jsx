import React from 'react'
import styled from 'styled-components';
import Header from "../components/Header";
import PizzaSizeSelector from "../components/PizzaSizeSelector"
import PizzaDetails from '../components/PizzaDetails';


function Order() {


  return (
    <>
    <header>
     <Header showNav={true} />
    </header>
    
    <form>
      <PizzaDetails/>
    </form>
  
  
</> 
 )
}

export default Order