import './App.css';
// import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import SearchContainer from './components/SearchContainer';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Details from './components/Details';


function App() {
  // function Home() {
  //   return (
  //     <div><Home/></div>
  //   )
  // }
  return (
    <div className="App">
      <Navbar />
      {/* <SearchContainer /> */}
      <Routes>
        <Route path='/' element={<SearchContainer/>} />
        {/* <Route path='/details/:id' element={<Results />}/> */}
        <Route path='/details' element={<Details />}/>
      </Routes>
    </div>
  );
}

export default App;
