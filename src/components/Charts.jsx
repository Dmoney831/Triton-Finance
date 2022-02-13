import React from 'react'
import Plot from 'react-plotly.js'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';




function Charts(props) {
    const [xValue, setXValue] = useState()
    const [yValue, setYValue] = useState()
    const [volume, setVolume] = useState()
    const { symbol } = useParams()
    
    const KEY = process.env.CHART_APP_API_KEY
    const fetchStock = () => {
        
        // let stockSymbol = 'SPY'
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${KEY}`;

        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let stockChartVolume = [];
        fetch(API_Call)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            
            for (var key in data['Time Series (Daily)']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
                stockChartVolume.push(data['Time Series (Daily)'][key]['5. volume']*0.000001);                
            }
            // console.log(stockChartXValuesFunction)
            setXValue(stockChartXValuesFunction)
            setYValue(stockChartYValuesFunction)
            setVolume(stockChartVolume)

        })
    }

    useEffect(()=>{
        fetchStock()
    }, [])
    // console.log(xValue)
    // console.log(yValue)
    // console.log(volume)
    return (
        <div>
            <h1>Chart is below.</h1>
            {/* <p>{xValue}</p> */}
            {/* <p>{yValue}</p> */}
            
            <Plot
                data={[
                    {
                        x: xValue,
                        y: yValue,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'rgb(82, 109, 195)' },
                    },
                    { type: 'bar', x: xValue, y: volume, marker: { color: 'gold'}},
                ]}
                layout={{ width: 1000, height: 750, title: `Last 100 Days. Volume (in hundred thounsands)*` }}
            />
        </div>
    )
}


export default Charts