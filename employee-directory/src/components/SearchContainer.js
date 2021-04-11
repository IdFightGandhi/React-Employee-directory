import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar";
import API from "../utils/API";

class SearchContainer extends Component {
    state = {
        result: [],
        filteredUser: [],
        search:"",
        filter:"",
        filteredEmployees:[],
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
    const name = event.target.name;
    // const value = event.target.value;
    console.log("HANDLE INPUT CHANGE")
    console.log(name);
    // console.log(value);
    this.setState({
        [name]: name
    });
    this.filteredEmployees(name.toLowerCase().trim());
};

handleFormSubmit = event => {
    event.preventDefault();
    console.log(event)
    const name = event.target.name;
    // const value = event.target.value;
    console.log("HANDLE FORM SUBMIT")
    console.log(name);
    // console.log(value);
    // this.filterEmployees();
};

sortBy =(key, primary =0, secondary = 0) => {
    let sortedEmployees = this.state.filteredEmployees;
    if (this.state.sortDirection[key]) {
        this.setState({
            filteredEmployees: sortedEmployees.reverse(),
            sortDirection: {
                ...this.initialSortDirection,
                [key]: this.state.sortDirection[key] === "asc" ? "desc" : "asc",
            },
        });
    }else {
        sortedEmployees = this.state.filteredEmployees.sort((a,b) => {
            a = a[key];
            b = b[key];

            if(primary) {
                if (secondary && a[primary] === b[primary]) {
                    return a[secondary].localeCompare(b[primary]);
                }else {
                    return a.localeCompare(b);
                }
            }
            console.log(sortedEmployees)

        });

        this.setState({
            filteredEmployees: sortedEmployees,
            sortDirection: {
                ...this.initialSortDirection,
                [key]: "asc",
            },
        });
    }
};

// filterEmployees = (value) => { console.log("Search result: ", this.state.search)
//     const newArray = this.state.filteredUser.filter(item => {

//         let values = Object.values(item)
//         .join("")
//         .toLowerCase();
//         return values.indexOf(this.state.search.toLowerCase()) !== -1;
//     });
//     console.log(newArray);
//     this.setState({ filteredUser: newArray})

// }

render() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    
                </div>
            </div>
            <div className="row">
            <div className="col-lg-6">
                <SearchBar
                search={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                />
                
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
                    {this.state.result.map(result => (
                    <tr key={result.id}>

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

                </table>
            </div>
            
        </div>
    );
}
};

export default SearchContainer


