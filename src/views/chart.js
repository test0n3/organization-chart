/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Collaborator from "../components/collaborator";

const testData = [
  {
    id: 1,
    name: "Mayra Navarro",
    position: "Product Manager",
    parent: 0,
    children: []
  },
  {
    id: 2,
    name: "Deivy Conde",
    position: "Tech Lead",
    parent: 0,
    children: [7, 8]
  },
  {
    id: 3,
    name: "Ricardo Yrupailla",
    position: "Tech Lead",
    parent: 0,
    children: [4]
  },
  {
    id: 4,
    name: "Diego Cuevas",
    position: "Tech Lead",
    parent: 3,
    children: [5, 6]
  },
  {
    id: 5,
    name: "Christopher Roa",
    position: "Tech Lead",
    parent: 4,
    children: []
  },
  {
    id: 6,
    name: "Frank Condezo",
    position: "Tech Lead",
    parent: 4,
    children: []
  },
  {
    id: 7,
    name: "Cristian Granda",
    position: "Tech Lead",
    parent: 2,
    children: []
  },
  {
    id: 8,
    name: "Cesar Cachay",
    position: "Tech Lead",
    parent: 2,
    children: []
  }
];

function ChartView({ ceoName, companyName }) {
  const initialCollaborators = JSON.parse(
    localStorage.getItem("collaborators") ||
      JSON.stringify([
        {
          id: 0,
          name: ceoName,
          position: "CEO",
          parent: "",
          children: [1, 2, 3]
        },
        ...testData
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
