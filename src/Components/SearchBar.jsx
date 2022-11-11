import { React } from "react";
import "./header.css"

const SearchBar = () => {

    return (
        <form action="/results" method="get" >
            <label htmlFor="header-search" />
            <input className="inputToCompare" type="text" placeholder="Search Products" name="s" id="header-search" />
            <button className="submitButton" type="submit">Go</button>
        </form>

    );
}

export default SearchBar;