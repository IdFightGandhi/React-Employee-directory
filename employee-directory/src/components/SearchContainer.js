import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import API from "../utils/API";

class SearchContainer extends Component {
    state = {
        result: [],
        filteredUser: [],
        search:"",
        filter:"",
        filterBy:"lastName",
        currentSort: "default",
        sortField:""
    };

    componentDidMount() {
        API.search()
        .then(res=>this.setState({
            result:res.data.results,
            filteredUser: res.data.results
        }))
        .catch(err => console.log(err));
    
};

handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    const name = event.target.name;
    const value = event.target.value;
    console.log("HANDLE INPUT CHANGE")
    console.log(name);
    console.log(value);
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    console.log(event)

    const name = event.target.name;
    const value = event.target.value;
    console.log("HANDLE FORM SUBMIT")
    console.log(name);
    console.log(value);
    this.filterEmployees();


};



export default SearchContainer
