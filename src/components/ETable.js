import React from "react";
import { Table } from 'reactstrap';
import ERow from './ERow';
import SortBtn from './SortBtn';

function ETable(props) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Picture</th>
          <th>First Name</th>
          <th>Last Name <SortBtn asc={ props.asc } onClick={ props.handleBtnClick } data-value="sort" /></th>
          <th>Location (City, State)</th>
          <th>Email</th>
          <th>Phone #</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((e) => 
          <ERow employee={e}/>
        )}
      </tbody>
    </Table>
  );
}

export default ETable;