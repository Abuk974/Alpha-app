import React from "react";
import FormattedDate from "./FormattedDate";



export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
                <ul>
                    <li>
                 <FormattedDate date={props.data.date}/>
                    </li>
                    
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <div className="float-left">
                            </div>
                        <img
                        src={props.data.iconUrl}
                        alt={props.data.description}
                        className="float-left"
                        />
                        <div className="float-left">
                         <span className="temperature">{Math.round(props.data.temperature)}</span>
                         <span className="units">°C</span>
                         </div>
                         </div>
                         </div>
                
                    </div>
                    
                    
                    <div className="col-12">
                        <ul>
                            <li>Humidity:{props.data.humidity}%</li>
                            <li>Wind:{Math.round(props.data.Wind)}km/hr</li>
                        </ul>
                    </div>
        </div>
    );
}