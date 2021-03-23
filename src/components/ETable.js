import React from "react";
import { Table } from 'reactstrap';
import ERow from './ERow';
import SortBtn from './SortBtn';

function ETable(props) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th className="align-middle">Picture</th>
          <th className="align-middle">First Name</th>
          <th className="align-middle">
            Last Name <SortBtn asc={ props.asc } onClick={ props.handleBtnClick } data-value="sort" />
          </th>
          <th className="align-middle">Location (City, State)</th>
          <th className="align-middle">Email</th>
          <th className="align-middle">Phone #</th>
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