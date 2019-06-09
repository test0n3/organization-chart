/** @jsx jsx */
import { jsx } from "@emotion/core";

function ChartHeader({ companyName }) {
  return (
    <header
      css={{
        width: "100%",
        backgroundColor: "#DDDDDD",
        borderBottom: "1px solid #CCCCCC",
        boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)"
      }}
    >
      <h1
        css={{
          maxWidth: 320,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          padding: 20,
          margin: 0,
          color: "#333333",
          fontFamily: "sans-serif"
        }}
      >
        {companyName}
      </h1>
    </header>
  );
}

export default ChartHeader;
