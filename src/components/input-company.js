/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function InputCompanyName(props) {
  function handleTextChange(event) {
    event.preventDefault();
    props.setCompanyName(event.target.elements.company.value);
  }
  return (
    <form
      css={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
        padding: "1.5em",
        background: "rgba(22, 22, 22, 0.57)",
        borderRadius: "0.5em"
      }}
      onSubmit={handleTextChange}
    >
      <input
        aria-label="Company's name"
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
        autoFocus
        name="company"
        type="text"
        placeholder="Company's name"
      />
    </form>
  );
}

export default InputCompanyName;
