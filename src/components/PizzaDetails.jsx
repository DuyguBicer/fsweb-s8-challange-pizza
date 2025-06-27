import styled from "styled-components"
import DoughSelector from "./DoughSelector"
import ExtraIngredients from "./ExtraIngredients"
import OrderButton from "./OrderButton"
import PizzaSizeSelector from "./PizzaSizeSelector"
import PriceSummary from "./PriceSummary"
import QuantityAndNote from "./QuantityAndNote"
import { useState } from "react"
import pizzas from "../pizzas";


function PizzaDetails() {

  const [size, setSize] = useState("");
  const [dough, setDough] = useState([]);
  const [ekstra, setEkstra] = useState([]);

  
const selectedPizza = pizzas[0];

  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  
  const handleDoughChange = (e)=> {
    setDough(e.target.value);
  }


const handleExtrasChange = (selected) => {
    setEkstra(selected);
  };
 



  return (
    <div>
       <h2>{selectedPizza.name}</h2>
      <PizzaSizeSelector
        selectedSize={size} onSizeChange={handleSizeChange}
      />
      <DoughSelector onDoughChange={handleDoughChange}
      />
       <ExtraIngredients
        ingredients={selectedPizza.ingredients}
        ekstra={ekstra}
        onChange={handleExtrasChange}
      />

      <p>Seçilen Ekstralar: {ekstra.join(", ")}</p>
    </div>
  )
}

export default PizzaDetails