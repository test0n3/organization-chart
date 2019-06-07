import React from 'react';

function InputNameCeo(props) {
  function handleTextChange(event) {
    event.preventDefault();
    props.setNameCeo(event.target.elements.ceo.value);
  }
  return (
    <form onSubmit={handleTextChange}>
      <input
        name="ceo"
        type="text"
        placeholder="Ceo's name..."
      />
    </form>
  );
}

export default InputNameCeo;
