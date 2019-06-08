import React from "react";

function InputNameCeo(props) {
  function handleTextChange(event) {
    event.preventDefault();
    props.onCeo(event.target.elements.ceo.value);
  }
  return (
    <div>
      <form onSubmit={handleTextChange}>
        <input name="ceo" type="text" placeholder="Ceo's name..." required />
      </form>
    </div>
  );
}

export default InputNameCeo;
