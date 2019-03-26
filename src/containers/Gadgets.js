import React, { Component } from "react";
import { connect } from "react-redux";
import Gadget from "../components/Gadget";
import * as actionTypes from "../store/actions/actionTypes";
import "./Gadgets.css";

class Gadgets extends Component {
  state = {
    // samsung: 3,
    // apple: 2,
    // huawei: 1
  };
  render() {
    // let disableMinus = {
    //   ...this.props
    // };

    // for (let key in disableMinus) {
    //   disableMinus[key] = disableMinus[key] <= 0;
    //   console.log(disableMinus);
    // }

    // for some reason looping state to get a boolean doesnot work
    // check out in detail
    let disableMinus = false;
    if (this.props.techS <= 0) {
      disableMinus = true;
    }
    return (
      <div>
        <h1>gadgets from containers</h1>
        <Gadget />
        {/* {Object.keys(this.props.tech).map(tech => {
          return (
            <ul>
              <li>{`${tech} : ${this.state[tech]}`}</li>
            </ul>
          );
        })} */}
        <div className="techCss">
          <h1>Samsung: {this.props.techS}</h1>
          <p onClick={() => this.props.OnAddTech()}>&#x2b;</p>
          <button
            onClick={() => this.props.OnRemoveTech()}
            disabled={disableMinus}
          >
            &minus;
          </button>
        </div>
        <div className="techCss">
          <h1>Ihpone: {this.props.techI}</h1>
          <p>&#x2b;</p>
          <p>&minus;</p>
        </div>
        <div className="techCss">
          <h1>Huawei: {this.props.techH}</h1>
          <p>&#x2b;</p>
          <p>&minus;</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    techS: state.samsung,
    techI: state.iphone,
    techH: state.huawei
  };
};

const mapDispatchToProps = dispatch => {
  return {
    OnAddTech: () => dispatch({ type: actionTypes.ADD_TECHNOLOGY }),
    OnRemoveTech: () => dispatch({ type: actionTypes.REMOVE_TECHNOLOGY })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gadgets);

// TWO TASK
// 1. MAKE STATE A NESTED OBJECT SO I CAN PASS THE KEYS AS AN ARGUEMENT SOTHAT I DIRECTLY CALL IN THE REDUCER
//     NOT GET FROM THE INITIAL STATE
// 2. NESTED OBJECT MAKE POSSIBLE TO LOOP IT AND OPEN WAY TO DISABLE THE BUTTON
