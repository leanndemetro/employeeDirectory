import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id.value} className="list-group-item">
          <img alt="employee" src={result.picture.thumbnail} className="img-fluid" />
          <p className="li">{result.name.first} {result.name.last}</p>
          <p className="li">{result.phone}</p>
          <p className="li">{result.email}</p>
          <p className="li">{result.dob.date}</p>
          
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
