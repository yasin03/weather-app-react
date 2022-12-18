import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getWeatherByCityName, getWeatherData } from "../api/weather-service";
import { usePosition } from "use-position";
import { settings } from "../settings";
import WeatherCard from "./weather-card";
import WeatherForm from "./weather-form";
import "./weather.scss";

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  const [city, setCity] = useState("ankara");
  const [loading, setLoading] = useState(false);
  const { latitude, longitude } = usePosition();

  const lang = navigator.language.split("-")[0];

  const loadData = async (city, latitude, longitude) => {
    setLoading(true);
    try {
      const key = settings.WEATHER_API_KEY;
      const resp = await getWeatherByCityName(city, lang, key);
      /* const resp = await getWeatherData(latitude, longitude, key); */
      setWeatherData(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  /*   useEffect(() => {
    latitude && longitude && loadData(latitude, longitude);
  }, [latitude, longitude]); */

  useEffect(() => {
    loadData(city);
  }, [city]);

  if (!weatherData) {
    return <p>Yükleniyor...</p>;
  }

  return (
    <div className={"weather-body"}>
      <Container>
        <Row className={"weather-row"}>
          <Col md={8} lg={6} xl={4} xxl={4}>
            <WeatherForm setCity={setCity} />
          </Col>
          {loading ? (
            <p>Yükleniyor...</p>
          ) : (
            <Col md={8} lg={6} xl={4} xxl={4}>
              <WeatherCard weatherData={weatherData} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Weather;
