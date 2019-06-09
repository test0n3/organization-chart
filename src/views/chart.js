/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Collaborator from "../components/collaborator";

function ChartView({ ceoName, companyName }) {
  const initialCollaborators = JSON.parse(
    localStorage.getItem("collaborators") ||
      JSON.stringify([
        {
          id: 0,
          name: ceoName,
          position: "CEO",
          parent: "",
          children: []
        }
      ])
  );

  const [collaborators, setCollaborators] = React.useState(
    initialCollaborators
  );

  React.useEffect(() => {
    localStorage.setItem("collaborators", JSON.stringify(collaborators));
  }, [collaborators]);

  function addCollaborator(collaboratorData) {
    setCollaborators(state => {
      state[collaboratorData.parent].children.push(state.length);
      state[state.length - 1].id = state.length - 1;
      return [...state, collaboratorData];
    });
    localStorage.setItem("collaborators", JSON.stringify(collaborators));
  }

  function renderChildren(id) {
    return (
      <div
        key={id}
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Collaborator
          collaborator={collaborators[id]}
          addCollaborator={addCollaborator}
        />

        <div
          css={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {collaborators[id].children.map(childId => renderChildren(childId))}
        </div>
      </div>
    );
  }

  return <div>{renderChildren(0)}</div>;
}

export default ChartView;
