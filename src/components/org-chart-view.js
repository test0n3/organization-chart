import React from "react";
import Collaborators from "./collaborator"; /* function draws each collaborator and songs  */

/**
 * component orgChartView
 * @param {*} organization : has company name
 * @param {*} collaborators : is list of components
 */

const orgChartView = (organization, collaborators) => {
  return (
    <>
      <header>
        <h1>{organization}</h1>
      </header>
      <main>
        <Collaborators />
      </main>
    </>
  );
};

export default orgChartView;
