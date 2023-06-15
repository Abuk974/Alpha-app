import React from "react";
import "./Weather.css"

export default function Weather(){
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

            <h1>New York</h1>
            <ul>
                <li>Wednesday:1:30</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                    <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="mostly cloudy"
                    className="float-left"
                    />
                    <div className="float-left">
                     <span className="temperature">24</span>
                     <span className="units">°C</span>
                     </div>
                     </div>
                     </div>
            
                </div>
                
                
                <div className="col-12">
                    <ul>
                        <li>Precipitation:15%</li>
                        <li>Humidity:72%</li>
                        <li>Wind:50km/hr</li>
                    </ul>
                </div>
            </div>
        
    );
}