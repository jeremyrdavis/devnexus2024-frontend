import React from "react";

export function WorkflowForm({
  workflow,
  text,
  handleSubmitLike,
  handleSubmitDislike,
}) {
  return (
    <form id="workflowForm">
      <div>
        <p>{text}</p>
      </div>
      <button type="submit" onClick={handleSubmitLike}>
        Yes
      </button>
      <button type="submit" onClick={handleSubmitDislike}>
        No
      </button>
    </form>
  );
}
