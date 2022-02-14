import React from 'react'
import Plot from 'react-plotly.js'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import '../Charts.css'

function Charts(props) {
    const [xValue, setXValue] = useState()
    const [yValue, setYValue] = useState()
    const [volume, setVolume] = useState()
    const [highValue, setHighValue] = useState()
    const [lowValue, setLowValue] = useState()
    const { symbol } = useParams()
    
    const KEY = process.env.CHART_APP_API_KEY
    const fetchStock = () => {
        let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${KEY}`;
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let stockChartYHighValuesFunction = [];
        let stockChartYLowValuesFunction = [];
        let stockChartVolume = [];
        fetch(API_Call)
        .then(res => res.json())
        .then(data =>{
            // console.log(data)
            for (var key in data['Time Series (Daily)']) {
                stockChartXValuesFunction.push(key);
                stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['4. close']);
                stockChartYHighValuesFunction.push(data['Time Series (Daily)'][key]['2. high']);
                stockChartYLowValuesFunction.push(data['Time Series (Daily)'][key]['3. low']);
                stockChartVolume.push(data['Time Series (Daily)'][key]['5. volume']*0.000001);                
            }
            setXValue(stockChartXValuesFunction)
            setYValue(stockChartYValuesFunction)
            setHighValue(stockChartYHighValuesFunction)
            setLowValue(stockChartYLowValuesFunction)
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
            <Plot className='chart-size'
                data={[
                    {
                        x: xValue,
                        y: yValue,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'rgb(82, 109, 195)' },
                        name: 'Price'
                    },
                    {
                        x: xValue,
                        y: highValue,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'green' },
                        name: 'Highest'
                    },
                    {
                        x: xValue,
                        y: lowValue,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                        name: 'Lowest'
                    },
                    {
                        name: 'Volume', 
                        type: 'bar', 
                        x: xValue, 
                        y: volume, 
                        marker: { color: 'gold'},
                        name: 'Volume'
                    },
                ]}
                layout={{ width: 1000, height: 800, title: `Last 100 Days. Volume (in hundred thounsands)*` }}
            />
        </div>
    )
}


export default Charts