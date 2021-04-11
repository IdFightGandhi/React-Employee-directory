import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header"
import SearchContainer from "./components/SearchContainer";


function App() {
    return (
        <Router>
            <div>
                <Header />
                
                <SearchContainer />
                

            </div>
        </Router>
    )
}
export default App;