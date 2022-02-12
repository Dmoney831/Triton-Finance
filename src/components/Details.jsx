import '../App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Details(props) {
    const [info, setInfo] = useState()
    // const {oneItem.symbol} = props
    const {symbol} = useParams()
    
    // console.log(symbol)

    const api_key = process.env.REACT_APP_API_KEY
    const URL = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${api_key}`
    const options = {
        Header: {
            'Accept': "application/json",
            'X-Finnhub-Token': api_key
            }
        }

    const fetchingDetails = async () => {
        // console.log("fetching details.....")
        try{
            await fetch(URL, options)
            .then((res)=>  res.json())
            .then(data=>{
                // console.log(data)
                setInfo(data)
            })
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(()=> {
        fetchingDetails()
        props.handleFetch(symbol)
    }, [])

    // console.log(props.results)
    // console.log(props.results.filter(item => (item.symbol===symbol)))
    if (!info || !symbol || !props.results) {
        return <h1>loading</h1>
    }
    let detailResult = props.results.filter(item => (item.symbol===symbol))
    
    return(
        <div className='details-master'>
            <div className='details0'>
                <h1>{detailResult[0].description} ({symbol})</h1>
                {/* <h2>Description: {detailResult[0].description}</h2>
                <h2>Ticker Symbol: {symbol}</h2> */}
            </div>
            <div className='details1'>

                <h3>Current Price: ${info.c}</h3>
                {parseFloat(info.d)>0?<h3 style={{color:'green'}}>Daily Price Change: ${info.d}</h3>:<h3 style={{color:'red'}}>Daily Price Change: ${info.d}</h3>}
                {parseFloat(info.dp)>0?<h3 style={{color:'green'}}>Daily Percent Change: {info.dp}%</h3>:<h3 style={{color:'red'}}>Daily Percent Change: {info.dp}%</h3>}
                <h3>High Price of the Day: ${info.h}</h3>
                <h3>Low Price of the Day: ${info.l}</h3>
                <h3>Open Price of the Day: ${info.o}</h3>
                <h3>Previous Close Price: ${info.pc}</h3>
            </div>
        </div>
       
    )
}

export default Details


