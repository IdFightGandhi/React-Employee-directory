import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"

function App() {
    return (
        <Router>
            <div>
                <Header />
                <SearchBar />

            </div>
        </Router>
    )
}
export default App;