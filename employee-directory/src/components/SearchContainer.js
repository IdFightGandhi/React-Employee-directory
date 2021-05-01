import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar";
import API from "../utils/API";
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class SearchContainer extends Component {
    state = {
        result: [],
        filteredUser: [],
        search:"",
        filter:"",
        filteredEmployees:[{}],
        currentSort: "default",
        sortDirection: this.initialSortDirection,
    };

    get initialSortDirection() {
        return{
            name:"",
            phone:"",
            email: "",
            dob:"",
        };
    }

    componentDidMount() {
        API.search()
        .then(res=>this.setState({
            
            result:res.data.results,
            filteredEmployees: res.data.results
        })
        
        )
        .catch(err => console.log(err));
   
    
};

handleInputChange = event => {
    event.preventDefault();
    console.log(event);
    const {name, value} =event.target;
    console.log(name)
    // const value = event.target.value;
    console.log("HANDLE INPUT CHANGE")
    console.log({name, value});
    // console.log(value);
    // const list = this.state.result.filter(item=>{
    //     let inputValue = Object.values(item).join("").toLowerCase()
    //     return inputValue.indexOf([name].toLowerCase())
    // })
    this.setState({
        [name]:value
        // filteredEmployees:list
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    console.log(event)
    const name = event.target.value;
    // const value = event.target.value;
    console.log("HANDLE FORM SUBMIT")
    console.log(name);
    // console.log(value);
    // this.filterEmployees();
};



render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6">
                <SearchBar key={this.state.search}
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                
            </div>
            </div>

            <div className="row">
                <table className="table">
                    
                    {/* <thead>
                        <tr scope="col">Employee Photo</tr>
                        <tr scope="col">First Name</tr>
                        <tr scope="col">Last Name</tr>
                        <tr scope="col">Email</tr>
                        <tr scope="col">Phone Number</tr>
                        <tr scope="col">D.O.B.</tr>
                    
                    </thead> */}
                    <tbody>
                    {this.state.result.map(result => (
                    <tr key={result.login.uuid}>

                        <td>
                            <img alt={result.name.first}  src={result.picture.thumbnail} />
                        </td>

                        <td>
                            {result.name.first}
                        </td>

                        <td>
                            {result.name.last}
                        </td>

                        <td>
                            {result.email}
                        </td>

                        <td>
                            {result.phone}
                        </td>

                      

                        
                    </tr>
      ))}
                </tbody>

                </table>
            </div>
            
        </div>
    );
}
};

export default SearchContainer


