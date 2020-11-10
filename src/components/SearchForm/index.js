import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Search</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name=""
          list="results"
          type="text"
          className="form-control"
          placeholder=""
          id="results.login.password"
        />
      
      </div>
    </form>
  );
}

export default SearchForm;
