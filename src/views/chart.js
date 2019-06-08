/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const initialColaborators = JSON.parse(
  localStorage.getItem("colaborators") ||
    JSON.stringify([
      {
        id: 0,
        name: "Carlos Ayala",
        position: "CEO",
        parent: "",
        children: [1, 2, 3]
      },
      {
        id: 1,
        name: "Mayra",
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
        name: "xyz",
        position: "Tech Lead",
        parent: 0,
        children: [4]
      },
      {
        id: 4,
        name: "xyz",
        position: "Tech Lead",
        parent: 3,
        children: [5, 6]
      },
      {
        id: 5,
        name: "xyz",
        position: "Tech Lead",
        parent: 4,
        children: []
      },
      {
        id: 6,
        name: "xyz",
        position: "Tech Lead",
        parent: 4,
        children: []
      },
      {
        id: 7,
        name: "xyz",
        position: "Tech Lead",
        parent: 2,
        children: []
      },
      {
        id: 8,
        name: "xyz",
        position: "Tech Lead",
        parent: 2,
        children: []
      }
    ])
);

function ChartView() {
  const [colaborators, setColaborators] = React.useState(initialColaborators);

  React.useEffect(() => {
    localStorage.setItem("colaborators", JSON.stringify(colaborators));
    console.log(colaborators);
  }, [colaborators]);

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
          {colaborators[id].parent}
          {colaborators[id].id}
        </div>

        <div
          css={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap"
          }}
        >
          {colaborators[id].children.map(childId => renderChildren(childId))}
        </div>
      </section>
    );
  }

  return <div>{renderChildren(0)}</div>;
}

export default ChartView;
