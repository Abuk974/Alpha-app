import React,{useState} from "react";
import axios from "axios"
import "./Weather.css"

export default function Weather(props){
const[weatherData, setweatherData]= useState({ready: false})

    function handleResponse(response){
        console.log(response.data)
        setweatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            Wind:response.data.wind.speed,
            description:response.data.main.description,
            city: response.data.name,
            
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        })

    }
    if (weatherData.ready){
        return (
            <div className="weather">
                <form>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city"
                     className="form-control"
                     autoFocus="on"
                    />
                    </div>
                
                    <div className="col-3">
                    <input type="submit" value="search" className="btn btn-primary" width="100"/>
                    </div>
                    </div>
                    
                </form>
    
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>Wednesday:7:00</li>
                    <li>{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                        <img
                        src={weatherData.iconUrl}
                        alt={weatherData.description}
                        className="float-left"
                        />
                        <div className="float-left">
                         <span className="temperature">{Math.round(weatherData.temperature)}</span>
                         <span className="units">°C</span>
                         </div>
                         </div>
                         </div>
                
                    </div>
                    
                    
                    <div className="col-12">
                        <ul>
                            <li>Humidity:{weatherData.humidity}%</li>
                            <li>Wind:{Math.round(weatherData.Wind)}km/hr</li>
                        </ul>
                    </div>
                </div>
            
        );
    } else {
    const apiKey="49b631c45785fe73d2a88477803dea22";
    let units="metric"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return"loading..."
    }
    
}