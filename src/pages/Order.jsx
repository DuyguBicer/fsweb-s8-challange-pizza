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
    <p> Frontend Dev olarak hâlâ position:absolute kullanıyorsan bu çok acı pizza tam sana göre.
        Pizza; domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel
        olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
        düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir...
        Küçük bir pizzaya benzer.</p>
      
    <form>
      <PizzaDetails/>
    </form>
  
  
</> 
 )
}

export default Order