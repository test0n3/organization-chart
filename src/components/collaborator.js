/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import InputCollaborator from "./input-collaborator";

const collaborator = ({ collaborator, addCollaborator }) => {
  return (
    <article
      css={{
        backgroundColor: "marfil",
        margin: "10px",
        width: 150,
        padding: 5,
        paddingTop: 20,
        borderRadius: 5,
        border: "1px solid #333333"
      }}
    >
      {/* {collaborator.parent} */}
      {/* {collaborator.id} */}
      <p
        css={{
          margin: 0,
          padding: 0,
          fontFamily: "sans-serif",
          fontSize: "1.1em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: 150
        }}
      >
        {collaborator.name}
      </p>
      <p
        css={{
          margin: 0,
          padding: 0,
          fontFamily: "sans-serif",
          fontSize: ".8em",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxWidth: 150
        }}
      >
        {collaborator.position}
      </p>
      <p css={{ textAlign: "right", padding: 0, margin: 0 }}>
        <InputCollaborator
          onCreate={addCollaborator}
          parent={collaborator.id}
        />
      </p>
    </article>
  );
};

export default collaborator;
