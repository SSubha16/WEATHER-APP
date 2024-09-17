import SearchBox from "./SearchBox" ;
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp () {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "New Delhi" ,
        feelsLike: 32.02 ,
        humidity: 100 ,
        temp: 27.05 , 
        tempMax: 27.05 ,
        tempMin: 27.05 ,
        weather: "mist" ,
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}