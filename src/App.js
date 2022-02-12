import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import SearchContainer from './components/SearchContainer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Details from './components/Details';



function App() {
  
  const [results, setResults] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
    
  const handleFetch = (quote)=> {
        const URL = `https://finnhub.io/api/v1/search?q=${quote}&token=${api_key}`
        const options = {
        Header: {
            'Accept': "application/json",
            'X-Finnhub-Token': api_key
            }
        }
        // console.log("fetching database........")
        fetch(URL, options)
        .then(res=> res.json())
        .then(data=>{
        // console.log(data.result)
        // const quoteResults = data
        // console.log(quoteResults)
        setResults(data.result)      
        })
    }



  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<SearchContainer handleFetch={handleFetch} results={results} setResults={setResults}/>} />
        <Route path='/details/:symbol' element={<Details handleFetch={handleFetch} results={results}/>}/>
      </Routes>
      <div className='footer'>
        <h3 className='copyright'>COPYRIGHT © Dmoney831 | DESIGNED BY Dmoney831</h3>
            {/* <a target="_blank" href="https://www.linkedin.com/in/workwith-derek/">
                    <i class="fa fa-linkedin-square" style="font-size:40px;color: white"></i>
            </a>
            <a target="_blank" href="https://github.com/Dmoney831">
                    <i class="fa fa-github" style="font-size:40px;color: white"></i>
            </a> */}
      </div>
    </div>
  );
}

export default App;


// return <div style={{ color: 'blue', lineHeight : 10, padding: 20 }}> Inline Styled Component</div>
