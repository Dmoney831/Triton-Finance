import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Mag from '../images/mag.png'




function Search(props) {
    const [ticker, setTicker] = useState("")
    const { handleFetch } = props
    const { results, setResults } = props

    const typingTicker = (e) => {
        // e.preventdefault()
        // console.log(e.target.value)
        // console.log(ticker)
        setTicker(e.target.value.toUpperCase())   
        if (e.target.value !==("")) {
            handleFetch(e.target.value)    
        }else {
            setResults([])
        } 
    }
    // console.log(ticker)

    const clickSearch = (e) => {
        e.preventDefault()
        // console.log('You just clicked search-button!')
        // console.log(ticker)
        // handleFetch(ticker)
    }

    // console.log(results)
    // const img="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-search-seo-dreamstale-lineal-dreamstale-7.png"
    return (
        <div className='search-bar'>
            <div className='logo0'>
                <img className='logo1' src={Logo} height={300} width={300}/>
            </div>
            <h2 className='searching'>Searching___  {ticker}....</h2>
            <form className='form' onSubmit={clickSearch}>
                <div className='big-box'>
                    <div className='search-dropdown'>
                        <input
                            className='form-control1'
                            placeholder="Please enter ticker symbol"
                            value={ticker}
                            onChange={typingTicker}
                            style={{ backgroundImage:'url("https://img.icons8.com/external-dreamstale-lineal-dreamstale/28/000000/external-search-seo-dreamstale-lineal-dreamstale-7.png")', backgroundRepeat:'no-repeat', paddingLeft:'40px', backgroundPosition:'5px center' }}  
                        />
                        <ul className='list-group'>
                            {results.slice(0,10).map((oneItem, index) => {
                                return (
                                    <Link to={`/details/${oneItem.symbol}`} key={index}>
                                    <button
                                        type='button'
                                        key={index}
                                        className='list-group-item list-group-item-action'>
                                            Symbol: {oneItem.symbol} | Description: {oneItem.description} 
                                    </button>
                                    </Link>
                                );
                            })} 
                        </ul>
                    </div>
                    <div>
                        <Link to={`/details/${ticker}`} style={{ textDecoration: 'none' }}><button className='button-30' type='submit'>Search</button></Link>
                    </div>
               </div>
            </form>
        </div>
    )
}

export default Search


