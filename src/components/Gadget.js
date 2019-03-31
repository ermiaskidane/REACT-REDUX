import React from "react";
import "./Gadget.css";

const gadget = props => {
  const listMobile = Object.keys(props.mobile).map(techgadget => {
    return (
      <ul key={techgadget} className="MobileList">
        <li className="MobileName">{techgadget}: </li>
        <li className="MobileNumber">{props.mobile[techgadget]}</li>
        <li onClick={() => props.add(techgadget)}>&#x2b;</li>
        <li
          onClick={() => props.remove(techgadget)}
          style={{ display: props.mobile[techgadget] <= 0 ? "none" : "block" }}
        >
          &minus;
        </li>
      </ul>
    );
  });
  return (
    <div>
      <div className="GadgetWorld">
        <h1 className="headingOneGadget">Gadget world</h1>
        <button className="GadgetButton" onClick={props.push}>
          next
        </button>
      </div>

      <div>{listMobile}</div>
    </div>
  );
};

export default gadget;
