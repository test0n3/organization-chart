/** @jsx jsx */
import React from 'react';
import { jsx } from "@emotion/core";

function InputNameCeo(props) {
  function handleTextChange(event) {
    event.preventDefault();
    props.onCeo(event.target.elements.ceo.value);
  }

  const breakpoints = [320, 375, 425, 768];
  const mq = breakpoints.map(bp => `@media (min-width: ${bp}px)`); 

  return (
  <div>
    <form css={{
      display: "flex",
      flexDirection: "column",
      width: "400px",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
      padding: "1.5em",
      background: "rgba(22, 22, 22, 0.57)",
      borderRadius: "0.5em",
      [mq[0]]: {
        width: '250px',
        padding: '0'
      },
      [mq[1]]: {
        width: '300px',
        padding: '0'
      },
      [mq[2]]: {
        width: '350px',
        padding: '0'
      },
      [mq[3]]: {
        width: '400px',
        padding: '0'
      }
    }}
    onSubmit={handleTextChange}>
      <input 
      css={{
        fontSize: "20px",
        padding: "10px",
        borderRadius: "4px",
        outline: "none",
        border: "none",
        borderBottom: "1px solid #ddd",
        width: "calc(100% - 10px - 10px)",
        textAlign: "center"
      }}
      name="ceo"
      type="text"
      placeholder="Ceo's Name"
      />
    </form>
    </div>  
  );
}

export default InputNameCeo;
