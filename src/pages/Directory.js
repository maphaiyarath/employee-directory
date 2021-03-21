import React, { Component } from "react";
import API from "../utils/API";
import ETable from '../components/ETable';
import { Container } from "reactstrap";

class Directory extends Component {
  state = {
    employees: []
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

  render() {
    return (
        <Container>
            <ETable employees={this.state.employees} />
        </Container>
    );
  }
}

export default Directory;