import '../App.css';
import { useState, useEffect } from 'react';
import Search from './Search'

function SearchContainer() {
    const [results, setResults] = useState([])
    const api_key = process.env.REACT_APP_API_KEY
    
    const handleFetch = (quote)=> {
        // const URL = `https://finnhub.io/api/v1/quote?symbol=SPY&token=sandbox_c829ddqad3i9d12parb0`
        // const URL = `https://finnhub.io/api/v1/quote?symbol=${quote}&token=${api_key}`
        const URL = `https://finnhub.io/api/v1/search?q=${quote}&token=${api_key}`
        
        // console.log(URL)
        const options = {
        Header: {
            'Accept': "application/json",
            'X-Finnhub-Token': api_key
            }
        }
        console.log("fetching database........")
        fetch(URL, options)
        .then(res=> res.json())
        .then(data=>{
        console.log(data.result)
        // const quoteResults = data
        // console.log(quoteResults)
        setResults(data.result)
        
        })
    }
    useEffect(()=>{
        console.log('console.log is running inside of useEffect')
        // handleFetch()
    }, [])
    const handleClick=(e, data)=> {
        e.preventDefault()
        console.log(data)
    }
    return (
        <div className="search-container">
            <Search handleFetch={handleFetch} results={results}/>
            {/* <h4>{handleClick}</h4> */}
            {/* <h3>Current Price: {results}</h3> */}
        </div>
    );
}

export default SearchContainer


