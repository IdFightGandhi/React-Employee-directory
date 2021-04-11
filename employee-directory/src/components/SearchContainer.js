import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar";
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

filterEmployees = (value) => { console.log("Search result: ", this.state.search)
    const newArray = this.state.filteredUser.filter(item => {

        let values = Object.values(item)
        .join("")
        .toLowerCase();
        return values.indexOf(this.state.search.toLowerCase()) !== -1;
    });
    console.log(newArray);
    this.setState({ filteredUser: newArray})

}

render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h1>Employee Directory</h1>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6">
                <SearchForm
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                <ResultList result={this.state.filteredUser} />
            </div>
            </div>

            <div className="row">
                <table className="table">
                    <tr>
                        <th scope="col">Employee Photo</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">D.O.B.</th>
                    </tr>
                </table>
            </div>
        </div>
    );
}
};

export default SearchContainer


