import React, { useState, useEffect } from "react";
import API from "../utils/API";
import compare from "../utils/Sort";
import filterByValue from "../utils/FilterByVal";
import ETable from '../components/ETable';
import Filter from '../components/Filter';

function Directory() {
  const [ employees, setEmployees ] = useState([]);
  const [ filteredList, setFilteredList ] = useState([]);
  const [ asc, setAsc ] = useState(true);

  useEffect(() => {
    API.getEmployees()
      .then(res => {
        let emps = res.data.results;
        emps.sort(compare);
        setEmployees(emps);
        setFilteredList(emps);
      })
      .catch(err => console.log(err));
  }, []);

  // sort button - asc or desc
  const handleBtnClick = event => {
    filteredList.reverse();
    setAsc(!asc);
  };

  const handleInputChange = event => {
    setFilteredList(filterByValue(employees, event.target.value));
  };

  return (
    <div className=" row justify-content-center">
      <Filter handleInputChange={ handleInputChange } />
      <ETable employees={ filteredList } asc={ asc } handleBtnClick={ handleBtnClick } />
    </div>
  );
}

export default Directory;