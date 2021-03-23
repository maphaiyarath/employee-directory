import React from "react";
import { Button } from 'reactstrap';
import { faSortDown, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SortBtn(props) {
  return (
    <Button
        onClick={ props.onClick }
        className={ `${ props["data-value"] }` }
        data-value={ props["data-value"] }
        color="light"
    >
            {props.asc && <FontAwesomeIcon icon={ faSortDown } />}
            {!props.asc && <FontAwesomeIcon icon={ faSortUp } />}
    </Button>
  );
}

export default SortBtn;