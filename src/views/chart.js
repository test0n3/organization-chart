/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const initialCollaborators = JSON.parse(
  localStorage.getItem("collaborators") ||
    JSON.stringify([
      {
        id: 0,
        name: "",
        position: "CEO",
        parent: "",
        children: []
      }
    ])
);

function ChartView({ ceoName, companyName }) {
  const [collaborators, setCollaborators] = React.useState(prevState => {
    if (initialCollaborators[0].name === "")
      initialCollaborators[0].name = ceoName;
    return initialCollaborators;
  });

  React.useEffect(() => {
    localStorage.setItem("collaborators", JSON.stringify(collaborators));
    console.log(collaborators);
  }, [collaborators]);

  function renderChildren(id) {
    return (
      <section
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <div
          css={{
            backgroundColor: "peru",
            margin: "10px",
            width: "80px",
            height: "80px"
          }}
        >
          {collaborators[id].parent}
          {collaborators[id].id}
        </div>

        <div
          css={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {collaborators[id].children.map(childId => renderChildren(childId))}
        </div>
      </section>
    );
  }

  return <div>{renderChildren(0)}</div>;
}

export default ChartView;
