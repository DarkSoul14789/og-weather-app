import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

const apiKey = "API_KEY";




function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

    const getData = (event)=>{
      if(event.keyCode===13){
        axios.get(url).then((response)=>{
          // console.log(response);
          setData(response.data);
          // console.log(data);
        }).catch((error)=>{
          console.log(error.message);
        })
        setLocation('')
      }
    }
    
    

  return (
    <div className="App">
      
      <div className="container">
        <input type="text"  placeholder='City Name' onChange={(e)=>setLocation(e.target.value)} onKeyDown={getData} value={location}/>
        <div className="upper">
          <p className="name">{data.name ? data.name : null}</p>
          <h1 className="temp">{data.main ? <h1>{data.main.temp.toFixed()} C</h1> : null}</h1>
          <p className="weather">{data.weather ? data.weather[0].main : null}</p>
        </div>
        <div className="bottom">
          <p className="feelsLike">Feels Like: {data.main ? <p>{data.main.feels_like.toFixed()} C</p> : null} </p>
          <p className="tempMax">Max Temperature: {data.main ? <p>{data.main.temp_max.toFixed()} C</p> : null}</p>
          <p className="tempMin">Min Temperature: {data.main ? <p>{data.main.temp_min.toFixed()} C</p> : null}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
