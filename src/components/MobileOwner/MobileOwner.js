import React from "react";
import { connect } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";

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
  
  const fieldFormsRef = props.fieldForms.map(form => {
  return Object.keys(form).map(forms => {
    return (
      <ul key={forms} style={styling}>
        <li>{form[forms].name}</li>
        <li>{form[forms].email}</li>
        <li>{form[forms].phoneNumber}</li>
        <li>{form[forms].addressOne}</li>
        <li>{form[forms].addressTwo}</li>
        <li>{form[forms].postCode}</li>
        <li>{form[forms].country}</li>
        <li>{form[forms].message}</li>
        <li onClick={() => props.OnDeleteHandler(form.id)}>Delete</li>
      </ul>
    );
  });
})

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
      
      {fieldFormsRef}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mobileOwner: state.mobileOwner.owner,
    fieldForms: state.fieldForm.Data
  };
};

export default connect(mapStateToProps)(mobileOwner);
