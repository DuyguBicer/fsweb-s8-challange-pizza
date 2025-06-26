import React, { useState } from 'react'




function DoughSelector({onDoughChange}) {

  


  return (
    <div>
      <h3>Hamur Seç *</h3>
      <select name="pizzaDough" onChange={onDoughChange}>
        <option value="kalin">Kalın</option>
        <option value="ince">İnce</option>
      </select>
    </div>
  )
}

export default DoughSelector