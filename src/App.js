import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import "./App.css";
import Gadgets from "./containers/Gadgets";
import MobileOwner from "./components/MobileOwner/MobileOwner";
import FieldForm from "./containers/FieldForm/FieldForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            display: "flex",
            justifyContent: "space-around"
          }}
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/owner">Owners</NavLink>
          <NavLink to="/forms">Contact data</NavLink>
        </div>
        <Switch>
          <Route path="/forms" component={FieldForm} />
          <Route path="/owner" component={MobileOwner} />
          <Route path="/" component={Gadgets} />
        </Switch>
      </div>
    );
  }
}

export default App;
