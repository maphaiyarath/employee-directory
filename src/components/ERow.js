import React from "react";

function ERow(props) {
  return (
    <tr>
        <td>
            <img src={props.employee.picture.thumbnail} alt="Profile" />
        </td>
        <td>{props.employee.name.first} {props.employee.name.last}</td>
        <td>{props.employee.location.city}, {props.employee.location.state}</td>
        <td>{props.employee.email}</td>
        <td>{props.employee.phone}</td>
    </tr>
  );
}

export default ERow;