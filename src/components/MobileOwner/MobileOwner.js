import React from "react";
import { connect } from "react-redux";

const mobileOwner = props => {
  console.log(props);
  const styling = {
    listStyle: "none"
  };

  const mapMobileOwner = props.mobileOwner.map(own => {
    return (
      <ul key={own.name + own.type} style={styling}>
        <li>
          <strong>{own.name}</strong> has <code>{own.type}</code> phone.
        </li>
      </ul>
    );
  });

  const backButton = () => {
    return props.history.goBack("/");
  };
  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "center"
        }}
      >
        <h1>Phone owner</h1>
        <button onClick={backButton}>back</button>
      </div>

      {mapMobileOwner}

      <h1>Owners detail</h1>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mobileOwner: state.mobileOwner.owner
  };
};

export default connect(mapStateToProps)(mobileOwner);