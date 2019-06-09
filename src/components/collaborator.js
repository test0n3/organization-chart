/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import InputCollaborator from "./input-collaborator";

const collaborator = ({ collaborator, addCollaborator }) => {
  return (
    <article
      css={{
        backgroundColor: "#cccccc",
        margin: "10px",
        width: 150
      }}
    >
      <header
        css={{
          borderBottom: "1px solid #333333",
          padding: 0,
          margin: 0,
          backgroundColor: "#CCCCCC",
          borderRadius: "5px 5px 0 0",
          border: "1px solid #333333"
        }}
      >
        <h2
          css={{
            margin: 0,
            padding: 5,
            fontWeight: "bold",
            fontSize: "0.8em",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 150
          }}
        >
          {collaborator.position}
        </h2>
      </header>
      <p
        css={{
          margin: 0,
          padding: 5,
          fontFamily: "sans-serif",
          fontSize: "1.1em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: 150,
          border: "1px solid #333333",
          borderTop: "none",
          borderBottom: "none",
          backgroundColor: "#FFFFFF"
        }}
      >
        {collaborator.name}
      </p>
      <p
        css={{
          textAlign: "right",
          padding: 5,
          margin: 0,
          border: "1px solid #333333",
          borderTop: "none",
          borderRadius: "0 0 5px 5px",
          backgroundColor: "#FFFFFF"
        }}
      >
        <InputCollaborator
          onCreate={addCollaborator}
          parent={collaborator.id}
        />
      </p>
    </article>
  );
};

export default collaborator;
