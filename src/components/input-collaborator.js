/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function InputCollaborator({ onCreate, parent }) {
  // onCreate function that handles the created collaborator and appends it to Collaborator's array

  const [name, setName] = React.useState("");
  const [position, setPosition] = React.useState("");
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  function handleOpenClick(event) {
    setIsDialogOpen(true);
    event.target.blur();
  }

  function handleCloseClick(event) {
    setIsDialogOpen(false);
    event.target.blur();
  }

  function handleNameChange(event) {
    setName(event.target.value); /* Catch data from form */
  }

  function handlePositionChange(event) {
    setPosition(event.target.value); /* Catch data from form */
  }

  function handleSubmit(event) {
    event.preventDefault();
    const collaboratorData = {
      name: name,
      position: position,
      parent: parent,
      children: []
    };

    onCreate(collaboratorData); // passed function that catches Collaborator's Data
    setIsDialogOpen(false);
    setName(""); // Clear form
    setPosition("");
  }

  return (
    <>
      <button
        css={{
          borderRadius: "50%",
          border: "1px solid #000",
          padding: 0,
          margin: 0,
          background: "none",
          cursor: "pointer",
          perspectiveOrigin: "0 0",
          textAlign: "center",
          width: 20,
          height: 20,
          fontSize: "0.8em",
          fontWeight: "bold",
          "&:hover": {
            backgroundColor: "#999999"
          }
        }}
        onClick={handleOpenClick}
      >
        +
      </button>
      {isDialogOpen && (
        <div
          css={{
            backgroundColor: "rgba(0, 0, 0, .5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100
          }}
        >
          <div
            role="dialog"
            css={{
              background: "white",
              border: "none",
              borderRadius: 5,
              position: "fixed",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "2rem 1rem 1rem 1rem",
              width: "80%",
              maxWidth: 360,
              zIndex: 110
            }}
          >
            <button
              css={{
                position: "absolute",
                right: "1rem",
                top: "1rem",
                margin: 0,
                padding: 0,
                fontSize: ".8em",
                background: "none",
                border: "1px solid #000",
                borderRadius: "50%",
                perspectiveOrigin: "0 0",
                textAlign: "center",
                width: 20,
                height: 20,
                "&:hover": {
                  backgroundColor: "#999999"
                }
              }}
              onClick={handleCloseClick}
            >
              X
            </button>
            <h3 css={{ margin: 0, fontWeight: "500", textAlign: "center" }}>
              Add collaborator
            </h3>
            <form
              css={{ marginTop: 20, textAlign: "center" }}
              onSubmit={handleSubmit}
            >
              <label for="collabName">
                <p
                  css={{
                    fontSize: "0.8em",
                    textAlign: "left",
                    margin: "10px 0 0 10px"
                  }}
                >
                  Collaborator's Name
                </p>
                <input
                  name="collabName"
                  id="collabName"
                  type="text"
                  placeholder="e.g.: John Smith"
                  required
                  onChange={handleNameChange}
                  css={{
                    border: "1px solid #000000",
                    borderRadius: 5,
                    fontSize: "1.2em",
                    padding: 5,
                    width: "90%"
                  }}
                />
              </label>
              <br />
              <label for="collabPosition">
                <p
                  css={{
                    fontSize: "0.8em",
                    textAlign: "left",
                    margin: "10px 0 0 10px"
                  }}
                >
                  Collaborator's Position
                </p>
                <input
                  name="collabPosition"
                  id="collabPosition"
                  type="text"
                  placeholder="e.g.: Help desk director"
                  required
                  onChange={handlePositionChange}
                  css={{
                    border: "1px solid #000000",
                    borderRadius: 5,
                    fontSize: "1.2em",
                    padding: 5,
                    width: "90%"
                  }}
                />
              </label>
              <button
                css={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: ".5rem",
                  border: "1px solid #000000",
                  color: "#000000",
                  width: "100%",
                  padding: ".75rem .5rem",
                  boxSizing: "border-box",
                  fontSize: ".9rem",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  outline: "none",
                  marginTop: 20,
                  "&:hover": {
                    backgroundColor: "#999999"
                  }
                }}
                type="submit"
              >
                Add collaborator
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default InputCollaborator;
