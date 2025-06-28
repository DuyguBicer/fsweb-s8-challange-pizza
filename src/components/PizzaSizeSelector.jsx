


function PizzaSizeSelector({ selectedSize, onSizeChange }) {


  return (

    <div>
      <h3>Boyut Seç *</h3>
      <form>
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="küçük"
            checked={selectedSize === "küçük"}
            onChange={onSizeChange}
          />
          <span>Küçük</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="orta"
            checked={selectedSize === "orta"}
            onChange={onSizeChange}
          />
          <span>Orta</span>
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="pizzaSize"
            value="büyük"
            checked={selectedSize === "büyük"}
            onChange={onSizeChange}
          />
          <span>Büyük</span>
        </label>
        

      </form>
    </div>
  )
}

export default PizzaSizeSelector