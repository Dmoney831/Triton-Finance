import '../App.css';
import Search from './Search'


function SearchContainer({handleFetch, results, setResults}) {
    
    return (
        <div className="search-container">
            <Search handleFetch={handleFetch} results={results} setResults={setResults}/>

        </div>
    );
}

export default SearchContainer


