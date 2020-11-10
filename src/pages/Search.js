import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import Alert from "../components/Alert";

//creates the original state values and sets them as empty
class Search extends Component {
  state = {
    search: "",
    employee: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all employees and update this.state.employee
  componentDidMount() {
    API.getRandomUser()
      .then(results => {
        console.log(results);
        this.setState({ results: results.data.results })
      })
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });

    let newResult = this.state.results.filter(employee =>{
     
      return employee.name.first.toLowerCase().startsWith(event.target.value) || employee.name.last.toLowerCase().startsWith(event.target.value) ||
      employee.name.first.startsWith(event.target.value) || employee.name.last.startsWith(event.target.value);
      
    })
    //this updates the existing result state
    this.setState({
      results: newResult
    })
    //conditional statement to load the original results once search length is at 0
    if (value.length===0){
      API.getRandomUser()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getRandomUser(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center"> </h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            // employees={this.state.employee}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
