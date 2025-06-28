import styled from "styled-components"
import DoughSelector from "./DoughSelector"
import ExtraIngredients from "./ExtraIngredients"
import OrderSummary from "./OrderSummary"
import PizzaSizeSelector from "./PizzaSizeSelector"
import PriceRatingReviews from "./PriceRatingReviews"
import NameAndNote from "./NameAndNote";
import { useState } from "react"
import pizzas from "../pizzas";
import axios from "axios"


const Wrapper = styled.div`
  padding: 2rem 4rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  max-width: 750px;
  margin: 2rem auto;
  font-family: 'Barlow', sans-serif;
  color: #292929;
  font-size: 16px;
`;

const SizeDoughRow = styled.div`
  display: flex;
  
  gap: 15rem;
  margin-bottom: 2rem;
`;


function PizzaDetails() {

  const selectedPizza = pizzas[0];
  const [size, setSize] = useState("");
  const [dough, setDough] = useState(" ");
  const [ekstra, setEkstra] = useState([]);
  const [name, setName] = useState("");
  const [note, setNote] = useState("");

  const [quantity, setQuantity] = useState(1);
  const extraPrice = ekstra.length * 5; 
  const basePrice = selectedPizza.price;
  const total = (basePrice + extraPrice) * quantity;

        const isFormValid = name.length >= 3 && size && dough;
  


  function handleSizeChange(event) {
    setSize(event.target.value);
  }

  
  const handleDoughChange = (e)=> {
    setDough(e.target.value);
  }


const handleExtrasChange = (selected) => {
    setEkstra(selected);
  };
 
const handleSubmit = async () => {
  if (!isFormValid) {
    alert("Lütfen tüm gerekli alanları doldurun.");
    return;
  }

  const orderData = {
    name,
    note,
    size,
    dough,
    extras: ekstra,
    quantity,
    totalPrice: total,
  };

 axios.post("https://reqres.in/api/pizza", orderData)
  .then((response) => {
    console.log("✅ Sipariş Başarılı:", response.data);
  })
  .catch((error) => {
    console.error("❌ Sipariş Başarısız:", error);
  });

};


  return (
    <Wrapper>
       <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "0.5rem" }}>{selectedPizza.name}</h2>
       <PriceRatingReviews
        price={selectedPizza.price}
        rating={selectedPizza.rating}
        reviews={selectedPizza.reviews}
       />
      <p style={{ fontSize: "14px", lineHeight: "1.6", marginBottom: "2rem" }}>
      {selectedPizza.description}
      </p>
      <SizeDoughRow>        
      <PizzaSizeSelector
        selectedSize={size} onSizeChange={handleSizeChange}
      />
      <DoughSelector onDoughChange={handleDoughChange}
      />
      </SizeDoughRow>
       <ExtraIngredients
        ingredients={selectedPizza.ingredients}
        ekstra={ekstra}
        onChange={handleExtrasChange}
      />
      <NameAndNote
        name={name}
        setName={setName}
        note={note}
        setNote={setNote}
      />
      <OrderSummary
      quantity={quantity}
      setQuantity={setQuantity}
      total={total}
      extraPrice={extraPrice}
      onOrder={handleSubmit}
      isFormValid={isFormValid}
    />
      <p>Seçilen Boyut: {size}</p>
      <p>Hamur Tipi: {dough}</p>
      <p>Seçilen Ekstralar: {ekstra.join(", ")}</p>
    </Wrapper>
  )
}

export default PizzaDetails