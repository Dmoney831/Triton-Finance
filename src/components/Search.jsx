import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'




function Search(props) {
    const [ticker, setTicker] = useState("")
    const { handleFetch } = props
    const { results, setResults } = props

    const typingTicker = (e) => {
        // e.preventdefault()
        console.log('typing ticker...........')
        console.log(e.target.value)
        // handleFetch(e.target.value)
        // setTicker(e.target.value)
        setTicker(e.target.value)
        if (e.target.value !==("")) {
            handleFetch(e.target.value)    
        } 
        // else {
            // results=[]
            // setResults([])
            // setTicker=("")
        // }    
    }
    console.log(ticker)
    const clickSearch = (e) => {
        e.preventDefault()
        console.log('You just clicked search-button!')
        console.log(ticker)
        handleFetch(ticker)
    }

    // useEffect(()=>{
    //     console.log("useEffect is running")
    //     handleFetch()
    // }, [])
    console.log(results)
    // console.log("my ticker is ", ticker)
    // if (ticker === "") {
    //     results === ([])
    // }
    const forceDefault=() => {
        if (ticker === '') {
            setResults([])
        }
    }
    // forceDefault()
    return (
        <div className='search-bar'>
            <h2>Searching___  {ticker}....</h2>
            <form className='form' onSubmit={clickSearch}>
                <div className='big-box'>
                    <div className='search-dropdown'>
                        <input
                            className='form-control1'
                            placeholder="Please enter ticker symbol"
                            value={ticker}
                            onChange={typingTicker}  
                        />
                        <ul className='list-group'>
                            {results.slice(0,10).map((oneItem, index) => {
                                return (
                                    
                                    <Link to={'/details'} key={index}>
                                    <button
                                        type='button'
                                        key={index}
                                        className='list-group-item list-group-item-action'>
                                            Symbol: {oneItem.symbol} | Company: {oneItem.description} 
                                    </button>
                                    </Link>
                                );
                            })}
                            
                        </ul>
                    </div>
                    <div>
                        <button className='search-button' type='submit'>Search</button>
                    </div>
               </div>
            </form>

        </div>
    )
}

export default Search


