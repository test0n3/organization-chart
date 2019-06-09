/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import InputNameCeo from "../components/input";
import Background2 from "../assets/giphy2.gif";

function CeoName({ onCeo }) {
  return (
    <div
      css={{
        minHeight: "100vh",
        margin: "0 0 0 0",
        display: "flex",
        backgroundPosition: "center",
        backgroundSize: "cover",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Noto Sans",
        backgroundImage: `url(${Background2})`,
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat"
      }}
    >
      <InputNameCeo onCeo={onCeo} />
    </div>
  );
}

export default CeoName;
