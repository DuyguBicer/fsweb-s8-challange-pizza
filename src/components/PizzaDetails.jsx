import styled from "styled-components"
import DoughSelector from "./DoughSelector"
import ExtraIngredients from "./ExtraIngredients"
import OrderButton from "./OrderButton"
import PizzaSizeSelector from "./PizzaSizeSelector"
import PriceSummary from "./PriceSummary"
import QuantityAndNote from "./QuantityAndNote"
import { useState } from "react"


function PizzaDetails() {

  const [size, setSize] = useState("");
  const [dough, setDough] = useState([]);

  
  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  
  const handleDoughChange = (e)=> {
    setDough(e.target.value);
  }

  return (
    <div>

      <PizzaSizeSelector
        selectedSize={size} onSizeChange={handleSizeChange}
      />
      <DoughSelector onDoughChange={handleDoughChange}
      />
    </div>
  )
}

export default PizzaDetails