import '../App.css';
// import { useState, useEffect } from 'react';
import Search from './Search'


function SearchContainer({handleFetch, results, setResults}) {
    
    return (
        <div className="search-container">
            <Search handleFetch={handleFetch} results={results} setResults={setResults}/>
            
            {/* <h4>{handleClick}</h4> */}
            {/* <h3>Current Price: {results}</h3> */}
        </div>
    );
}

export default SearchContainer


