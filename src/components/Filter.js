import React from "react";
import { Form, FormGroup, Input } from 'reactstrap';

function Filter(props) {
    return (
      <Form>
        <FormGroup>
          <Input type="text" name="filter" id="filter" placeholder="Filter by name..." style={{ width: '150px' }} onChange={ props.handleInputChange } />
        </FormGroup>
      </Form>
    );
}

export default Filter;