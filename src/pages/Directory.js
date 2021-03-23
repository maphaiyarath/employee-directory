import React, { Component } from "react";
import API from "../utils/API";
import ETable from '../components/ETable';

class Directory extends Component {
  state = {
    employees: [],
    asc: true
  };

  // When the component mounts, load the employees to be displayed
  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then(res => {
        this.setState({
          employees: res.data.results
        });
      })
      .catch(err => console.log(err));
  };

  // sort button - asc or desc
  handleBtnClick = event => {
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };
    newState.asc = !newState.asc;

    // Replace our component's state with newState
    this.setState(newState);
  };

  render() {
    return (
        <ETable employees={ this.state.employees } asc={ this.state.asc } handleBtnClick={ this.handleBtnClick } />
    );
  }
}

export default Directory