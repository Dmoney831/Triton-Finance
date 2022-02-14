import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import SearchContainer from './components/SearchContainer';
import Navbar from './components/Navbar';
// import Search from './components/Search'
import Details from './components/Details';
import About from './components/About';



function App() {
  
  const [results, setResults] = useState([])
  const api_key = process.env.REACT_APP_API_KEY
    
  const handleFetch = (quote)=> {
        // const URL = `https://finnhub.io/api/v1/search?q=${quote}&token=${api_key}`
        const URL = `https://finnhub.io/api/v1/search?q=${quote}&token=c829ddqad3i9d12parag`
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
        <Route path='/about' element={<About />} />
        <Route path='/details/:symbol' element={<Details handleFetch={handleFetch} results={results}/>}/>
      </Routes>
      <div className='footer'>
        <h3 className='copyright'>COPYRIGHT © Dmoney831 | DESIGNED BY Dmoney831</h3>
        <div className='icons'>
          <a target="_blank" href="https://github.com/Dmoney831"><img src='https://img.icons8.com/carbon-copy/60/000000/github.png'/></a>
          <a target="_blank" href="https://www.linkedin.com/in/workwith-derek/"><img src="https://img.icons8.com/ios/55/000000/linkedin.png"/></a>
        </div>
      </div>
    </div>
  );
}

export default App;

