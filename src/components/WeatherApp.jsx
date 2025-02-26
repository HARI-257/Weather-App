import {useState, useEffect} from 'react'
export default function WeatherApp(){
	
	const [city , setCity] = useState('')
	const [weather, setWeather] = useState(null)
	const [error, setError] = useState("");


	const API_KEY = 'f00f7e19d8b14528ca11ab4cd04dfa6f'

	const getWeather = () => {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f00f7e19d8b14528ca11ab4cd04dfa6f&units=metric`)
		.then((response) => response.json())
		.then((data) => {
			  if (data.cod === "404") {  // If city not found
			  	setError("Error: city not found")
			  	setWeather(null)
                setCity('')
            } else {
                setWeather(data);  
                setError("")
                console.log(data)
            }
	})
	.catch((error)=>{
		console.error("Error fetching data:", error);
		 setError("Something went wrong. Try again later.");
	})
}

    const weatherstyle = {
      color: "white",
      padding:"20px",
      marginTop:"20px",
      backgroundColor: "DodgerBlue",
      fontFamily: "Arial",
      height:"100%",
      width:"auto"
    };

	return(
		<>
			<h1>WeatherApp</h1>
			<input type = "text" value={city} placeholder="city" onChange={(e) => setCity(e.target.value)} />
			<button onClick = {getWeather}>Search</button>
			<main>
			{error && <p style={{ color: "orange" ,backgroundColor:"black",padding:"10px"}}>{error}</p>}
				{weather ? (
				  <div
				  style={weatherstyle}
				  >
				    <h2>{weather.name}</h2>  
				    <p>Temperature: {weather.main.temp}°C</p>  
				    <p>Condition: {weather.weather[0].description}</p>
				    <img 
				      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
				      alt="Weather Icon"
				      style={{width: 200}}
    				/>
				  </div>) : 
				( <p>Enter a city and click the button to get weather data.</p> )
			}
			</main>
		</>
		)
}
