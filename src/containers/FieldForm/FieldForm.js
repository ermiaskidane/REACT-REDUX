import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../../components/UI/input";
import "./FieldForm.css";
import * as actionTypes from "../../store/actions/actionTypes";

class FieldForm extends Component {
  state = {
    formField: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name"
        },
        value: ""
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email"
        },
        value: ""
      },
      phoneNumber: {
        elementType: "input",
        elementConfig: {
          type: "number",
          placeholder: "Your phoneNumber"
        },
        value: ""
      },
      addressOne: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "address One"
        },
        value: ""
      },
      addressTwo: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "address two"
        },
        value: ""
      },
      postCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Enter postcode"
        },
        value: ""
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Country"
        },
        value: ""
      },
      message: {
        elementType: "textarea",
        elementConfig: {
          type: "textarea",
          placeholder: "Enter message"
        },
        value: ""
      }
    }
  };

  inputChangeHandler = (event, formElementId) => {
    const immutableFormField = {
      ...this.state.formField
    };

    const immutableValueDeeply = {
      ...immutableFormField[formElementId]
    };

    immutableValueDeeply.value = event.target.value;

    // save
    immutableFormField[formElementId] = immutableValueDeeply;
    this.setState({
      formField: immutableFormField
    });
  };

  submitHandler = event => {
    event.preventDefault();
    console.log("submit");
    const formData = {};
    for (let formIdentifier in this.state.formField) {
      formData[formIdentifier] = this.state.formField[formIdentifier].value;
    }
    const submit = {
      Datas: formData
    };
    console.log(submit);
    this.props.history.replace("/");
    this.props.OnAddContact(submit);
    // this.setState({
    //   formField: submit
    // });
  };
  render() {
    const formsfieldElementArray = [];
    for (let key in this.state.formField) {
      formsfieldElementArray.push({
        id: key,
        config: this.state.formField[key]
      });
    }

    let forms = (
      <form>
        {formsfieldElementArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={event => this.inputChangeHandler(event, formElement.id)}
          />
        ))}
      </form>
    );
    return (
      <div>
        <h3>Fill your detail please!!!</h3>
        {forms}
        <button className="SubmitButton" onClick={this.submitHandler}>
          Submit
        </button>
        {/* <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="YourName"
        /> */}
        {/* <form action="/">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="number" placeholder="your phone number " />
          <input type="text" placeholder="address one" />
          <input type="text" placeholder="address two" />
          <input type="text" placeholder="postcode" />
          <input type="text" placeholder="country" />
          <textarea type="textarea" placeholder="message" />
          <button className="SubmitButton">Submit</button>
        </form> */}
      </div>
    );
  }
}
// const mapStateToProps = (state) => {

// }
const mapDispatchToProps = dispatch => {
  return {
    OnAddContact: forms =>
      dispatch({ type: actionTypes.ADD_DETAIL, contactData: forms })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FieldForm);
