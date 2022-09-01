import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=530abed1e31b809cb6a7405554f46bd8`;

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data, 'RD');
      });
      setLocation('');
    }
  };

  return (
    <div className='app'>
      <div className='search'>
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          type='text'
          placeholder='Enter City'
        />
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <h1>{data.name}</h1>
          </div>
          <div className='temp'>
            {data.main ? (
              <h2>{data.main.temp.toFixed()}°F</h2>
            ) : (
              <div className='welcome'>
                Hey,
                <br /> What's the weather?
              </div>
            )}
          </div>
          {/* <div className='description'>
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div> */}
        </div>
        <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
        {data.name !== undefined && (
          <div className='bottom'>
            <div className='feels'>
              <h3 className='bold'>Feels Like</h3>
              {data.main ? <p>{data.main.feels_like.toFixed()}°F</p> : null}
            </div>
            <div className='humidity'>
              <h3 className='bold'>Humidity</h3>
              {data.main ? <p>{data.main.humidity}%</p> : null}
            </div>
            <div className='wind'>
              <h3 className='bold'>Wind</h3>
              {data.wind ? <p>{data.wind.speed.toFixed()} mph</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
