import React,{useState} from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props){
const[weatherData, setweatherData]= useState({ready: false});
const[city, setCity]=useState(props.defaultCity);

    function handleResponse(response){
        console.log(response.data)
        setweatherData({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date:new Date(response.data.dt*1000),
            description:response.data.description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            Wind:response.data.wind.speed,
            city: response.data.name, 
        })
    }

    function handleSubmit(event){
        event.preventdefault();
        search()
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }

    function search(){
        const apiKey="f9c1fed4ccbb99764c2ed9974a872da1";
    let units="metric"
    let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse)}


    if (weatherData.ready){
        return (
            <div className="weather">
                <form On={handleSubmit}>
                    <div className="row">
                        <div className="col-9">
                    <input type="search" placeholder="Enter a city"
                     className="form-control"
                     autoFocus="on"
                     onChange={handleCityChange}
                    />
                    </div>
                
                    <div className="col-3">
                    <input type="submit" value="search" className="btn btn-primary" width="100"/>
                    </div>
                    </div>
                    
                </form>
                <WeatherInfo data={weatherData}/>
                
                </div>
            
        );
    } else {
    search();
    return"loading..."
    };
    
    }