import '../Overview.css'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

function Overview() {
    const { symbol } = useParams()
    const [getInfo, setGetInfo] = useState("")

    const api_key = process.env.CHART_APP_API_KEY
    const URL = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${api_key}`
    
    const options = {
        Header: {
            'Accept': "application/json",
            'X-Finnhub-Token': api_key
            }
        }

    
    const fetchOverview = async () => {
        try{
            await fetch(URL, options)
            .then((res) => res.json())
            .then(data => {
            
            setGetInfo(data)
        })

        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchOverview()
    }, [])
    console.log(getInfo)
    
    return (
        <div className='main'>
            <h6 style={{ textDecoration:"underline", fontSize:'1.2vw' }}>Overview</h6>
            <div className='description-div'>
                <p className='description-p' style={{ fontSize:'16px'}}>{getInfo.Description}</p>
            </div>
        </div>
    )
}

export default Overview