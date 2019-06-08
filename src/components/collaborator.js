/** @jsx jsx */
import { jsx } from "@emotion/core";

const collaborator = ({ collaborator }) => {
  return (
    <article
      css={{
        backgroundColor: "marfil",
        margin: "10px",
        // minWidth: "132px",
        // maxWidth: "200px",
        width: 150,
        padding: 5,
        // paddingTop: 20,
        borderRadius: 5,
        border: "1px solid #333333"
      }}
    >
      {collaborator.parent}
      {collaborator.id}
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
        <button
          css={{
            borderRadius: "50%",
            border: "1px solid #000",
            padding: "5px",
            margin: 0,
            background: "none",
            cursor: "pointer",
            perspectiveOrigin: "0 0",
            textAlign: "start",
            "&:hover": {
              backgroundColor: "#999999"
            }
          }}
        >
          +
        </button>
      </p>
    </article>
  );
};

export default collaborator;
