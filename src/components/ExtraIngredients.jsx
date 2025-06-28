import React from 'react'
import styled from 'styled-components';



const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem 1rem;
`;


function ExtraIngredients({ ingredients = [], ekstra=[], onChange }) {

 
const handleExtraChange = (e) => {
    const { value, checked } = e.target;
 
 
    let newValues;
    
    if (checked) {
      if (ekstra.length <= 10) {
        newValues = [...ekstra, value];
      } else {
         newValues = [...ekstra];
      }
        } else {
      newValues = ekstra.filter((item) => item !== value);
    }
   
      onChange?.(newValues);
    }
 
  return (

    <div>
      <h3>Ekstra Malzemeler</h3>
      <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
     
      <form> 
        <IngredientsGrid>
        {ingredients.map((item, i) => (
          <label key={i}>
            <input
              type="checkbox"
              value={item}
              checked={ekstra.includes(item)}
              onChange={handleExtraChange}
              disabled={
                !ekstra.includes(item) && ekstra.length > 10}
            />
            <span>{item}</span>
          </label>
      ))} 
      </IngredientsGrid>
      </form>
     
    </div>
)}

export default ExtraIngredients