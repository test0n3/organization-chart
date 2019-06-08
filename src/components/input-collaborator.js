import React from "react";

function InputCollaborator(props) {
  function handleTextChange(event) {
    event.preventDefault();
    props.onCeo(event.target.elements.collaborator.value);
  }
  return (
    <div>
      <form onSubmit={handleTextChange}>
        <input
          name="collabName"
          type="text"
          placeholder="Collaborator's name..."
          required
        />
        <input
          name="collabPosition"
          type="text"
          placeholder="Collaborator's position..."
          required
        />
      </form>
    </div>
  );
}

export default InputCollaborator;
