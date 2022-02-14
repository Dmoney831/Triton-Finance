import '../App.css';
import '../Details.css';
// import { Routes, Route, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Charts from './Charts';
import Overview from './Overview';
import 'antd/dist/antd.css'
import Clock from 'react-live-clock';
import { Switch } from 'antd'
import moment from 'moment'

function Details(props) {
    const [results, setResults] = useState([])
    const [info, setInfo] = useState()

    // const {oneItem.symbol} = props
    const { symbol } = useParams()


    // console.log(symbol)

    const api_key = process.env.REACT_APP_API_KEY
    // const URL = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${api_key}`
    const URL = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=sandbox_c829ddqad3i9d12parb0`
    const options = {
        Header: {
            'Accept': "application/json",
            'X-Finnhub-Token': api_key
        }
    }
    useEffect(() => {
        const fetchingDetails = async () => {
            // console.log("fetching details.....")
            try {
                await fetch(URL, options)
                    .then((res) => res.json())
                    .then(data => {
                        // console.log(data)
                        setInfo(data)
                    })
            } catch (err) {
                console.log(err)
            }
        }


        const api_key = process.env.REACT_APP_API_KEY
        const handleFetch = () => {
            // const URL = `https://finnhub.io/api/v1/search?q=${quote}&token=${api_key}`
            const URL1 = `https://finnhub.io/api/v1/search?q=${symbol}&token=sandbox_c829ddqad3i9d12parb0`
            const options1 = {
                Header: {
                    'Accept': "application/json",
                    'X-Finnhub-Token': api_key
                }
            }
            // console.log("fetching database........")
            fetch(URL1, options1)
                .then(res => res.json())
                .then(data => {
                    // console.log(data.result)
                    // const quoteResults = data
                    // console.log(quoteResults)
                    setResults(data.result)
                })
        }
        handleFetch(symbol)

        // props.handleFetch(symbol)
        fetchingDetails()
    }, [])

    // console.log(props.results)
    // console.log(props.results.filter(item => (item.symbol===symbol)))
    if (!info || !symbol || results.length === 0) {
        return <h1>loading</h1>
    } 
    let detailResult = results.filter(item => (item.symbol === symbol))

    return (
        <div className='details-master'>
            <div className='details0'>
                <h1 className='name'>{detailResult[0].description} ({symbol})</h1>
                <div className='price-time'>
                    <h2 className='current-price'>{info.c}</h2>
                    <div><Clock style={{ fontWeight: 'bold', marginLeft: '53vw', fontSize: '2vw' }} format={'MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'EST'} /></div>
                </div>
            </div>
            <div className='details1'>
                <div className='info-news'>
                    <div className='detail-info'>
                        <div className='div0'>{parseFloat(info.d) > 0 ? <p><span>Daily Price Change: </span><span className='span2' style={{ color: 'green', fontWeight: 'bold' }}>{info.d}</span></p> : <p >Daily Price Change: <span className='span2' style={{ color: 'red', fontWeight: 'bold' }}>{info.d}</span></p>}</div>
                        <div className='div0'>{parseFloat(info.dp) > 0 ? <p>Daily Percent Change: <span className='span2' style={{ color: 'green', fontWeight: 'bold' }}>{info.dp}%</span></p> : <p >Daily Percent Change: <span className='span2' style={{ color: 'red', fontWeight: 'bold' }}>{info.dp}%</span></p>}</div>
                        <div className='div0'><p>High Price of the Day: <span className='span2' style={{ fontWeight: 'bold' }}>{info.h}</span></p></div>
                        <div className='div0'><p>Low Price of the Day: <span className='span2' style={{ fontWeight: 'bold' }}>{info.l}</span></p></div>
                        <div className='div0'><p>Open Price of the Day: <span className='span2' style={{ fontWeight: 'bold' }}>{info.o}</span></p></div>
                        <div className='div0'><p>Previous Close Price: <span className='span2' style={{ fontWeight: 'bold' }}>{info.pc}</span></p></div>
                    </div>
                    <div className='overview'>
                        <Overview symbol={symbol} />
                    </div>
                </div>
                <div className='chart'>
                    <Charts symbol={symbol} />
                </div>
            </div>
        </div>

    )
}

export default Details

    // 1. put className for each p tags flext justify contents. 
    // 2. right-align in second span Tags.
    // justify contents? 

