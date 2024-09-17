import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css" ;
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

export default function InfoBox({info}) {
    let INIT_URL = "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;

    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ;
    let HOT_URL = "https://media.istockphoto.com/id/1015823292/photo/global-warming-climate-change-sign-high-temperature-thermometer-fire-concept.jpg?s=2048x2048&w=is&k=20&c=W9SmQfgyHoq4SW9y0-XYYaw4uaYOe1MQttm1C-bUTic=" ;
    let RAIN_URL = "https://media.istockphoto.com/id/520773327/photo/caution-heavy-rain.jpg?s=2048x2048&w=is&k=20&c=SloIlg0jDiE8hmI_agNFXm9jDdw0bJPLOsJVCw9hdi4=" ;
    return (
        <div className="InfoBox">
            <div className='cardContainer'>
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                     sx={{ height: 140 }}
                     image= {info.humidity > 80 ? RAIN_URL : info.temp > 30 ? HOT_URL : info.temp > 18 ? INIT_URL : COLD_URL}
                     title="green iguana"
                 />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 30 ? <WbSunnyIcon/> : info.temp > 18 ? <WbTwilightIcon/> : <AcUnitIcon/> }
               </Typography>
               <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
                 <div>Temperature = {info.temp}&deg;C</div>
                 <div>Humidity = {info.humidity}%</div>
                 <div>Min Temperature = {info.tempMin}&deg;C</div>
                 <div>Max Temperature = {info.tempMax}&deg;C</div>
                 <p>
                  The Weather can be described as '<i>{info.weather}</i>' and feels like {info.feelsLike}&deg;C
                 </p>
               </Typography>
             </CardContent>             
            </Card>
            </div>
        </div>
    );
}