import React from "react";
import Card from "react-bootstrap/Card";
import "./weather-card.scss";
import { TiWeatherSunny } from "react-icons/ti";
import { WiSnowflakeCold } from "react-icons/wi";

const WeatherCard = (props) => {
  const { weatherData } = props;

  console.log(weatherData);
  const desc = weatherData.weather[0].description;
  const upper = (val) => {
    val.toUppercase();
  };
  return (
    <div className="weather-card">
      <Card className="weather-card-card">
        <div className="weather-card-bg"></div>
        <Card.Body>
          <Card.Title>{weatherData.name}</Card.Title>
          <Card.Text>
            {weatherData.main.temp < 18 ? (
              <WiSnowflakeCold />
            ) : (
              <TiWeatherSunny />
            )}
            &nbsp;
            {weatherData.main.temp} &deg;C
          </Card.Text>
          <Card.Text>
            <TiWeatherSunny />
            &nbsp;
            {weatherData.main.humidity} %
          </Card.Text>
          <Card.Text>
            &nbsp;
            {weatherData.weather[0].description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
