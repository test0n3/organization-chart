import React from 'react';

function InputCompanyName(props) {
  function handleTextChange(event) {
    event.preventDefault();
    props.setCompanyName(event.target.elements.company.value);
  }
  return (
    <form onSubmit={handleTextChange}>
      <input
      css={{

      }}
        name="company"
        type="text"
        placeholder="Company's name..."
      />
    </form>
  );
}

export default InputCompanyName;