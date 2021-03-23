import React, { Component } from "react";
import API from "../utils/API";
import compare from "../utils/Sort";
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
        let emps = res.data.results;
        // emps.sort((a, b) => a.name.last - b.name.last);
        // emps.sort(sort_by('name.last', false, (a) => (a) =>  a.toUpperCase()));
        emps.sort(compare);
        console.log(emps);
        this.setState({
          employees: emps
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

    newState.employees.reverse();

    // Replace our component's state with newState
    this.setState(newState);
  };

  handleFormSubmit = event => {
    /*
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
    */
  };

  render() {
    return (
        <ETable employees={ this.state.employees } asc={ this.state.asc } handleBtnClick={ this.handleBtnClick } />
    );
  }
}

export default Directory