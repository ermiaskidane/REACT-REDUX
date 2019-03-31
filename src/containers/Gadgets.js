import React, { Component } from "react";
import { connect } from "react-redux";
import Gadget from "../components/Gadget";
import * as actionTypes from "../store/actions/actionTypes";
import "./Gadgets.css";

class Gadgets extends Component {
  pushHandler = () => {
    this.props.history.push("/owner");
  };
  render() {
    console.log(this.props.fieldForms);
    return (
      <div>
        <h1>gadgets from containers</h1>

        <Gadget
          mobile={this.props.techGadgets}
          add={this.props.OnAddTech}
          remove={this.props.OnRemoveTech}
          push={this.pushHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    techGadgets: state.gadget.gadgets
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnAddTech: techName =>
      dispatch({ type: actionTypes.ADD_TECHNOLOGY, techGadgetName: techName }),
    OnRemoveTech: techName =>
      dispatch({
        type: actionTypes.REMOVE_TECHNOLOGY,
        techGadgetName: techName
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gadgets);
