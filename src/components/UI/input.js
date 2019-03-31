import React from "react";

const input = props => {
  let InputElement = null;
  switch (props.elementType) {
    case "input":
      InputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      InputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      InputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return <div>{InputElement}</div>;
};

export default input;
