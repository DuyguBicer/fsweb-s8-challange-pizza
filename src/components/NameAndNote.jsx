
import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';

const WrapperName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`;
const NoteWrapper = styled.div`
  margin-top: 2rem;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
`;

const TextArea = styled.textarea`

  width: 100%;
  padding: 0.75rem;
  font-size: 14px;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-top: 0.5rem;
  resize: none;
`;


const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0;
`;

function NameAndNote({ name, setName, note, setNote }) {
  const [error, setError] = useState();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length < 3) {
      setError("İsim en az 3 karakter olmalıdır.");
    } else {
      setError("");
    }
  }


 
    return (
      <>
    <WrapperName>
      
        <Label htmlFor="name">İsim:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        {error && <Error>{error}</Error>}
    </WrapperName>  

      <NoteWrapper>
      
        <Label htmlFor="note">Notlar:</Label>
        <TextArea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Siparişinize eklemek istediğiniz notlar..."
        />
      
    </NoteWrapper>
  </>
  );
  
}

export default NameAndNote