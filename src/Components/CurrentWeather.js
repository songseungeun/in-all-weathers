import React from "react";
import styled from "styled-components";

const CurrentWeatherBlock = styled.div`
  padding: 30px;

  background-color: #ccc;
  text-align: center;
`;

const WeatherIcon = styled.div`
  width: 130px;
  height: 130px;

  margin: 0 auto;

  background-image: ${(props) =>
    `url("http://openweathermap.org/img/wn/${props.icon}@2x.png")`};
  background-position: center center;
  background-size: cover;
`;

const CurrentWeather = ({ current, timezone }) => {
  // console.log("Current:", current);

  const { temp, feels_like } = current;
  const { main, description, icon } = current.weather[0];

  return (
    <CurrentWeatherBlock>
      <h3>in all weathers</h3>
      <h4>{timezone}</h4>
      <h4>{description}</h4>
      <WeatherIcon icon={icon} />
      <h1>{Math.floor(temp)}˚</h1>
      <h3>체감온도 {Math.floor(feels_like)}˚</h3>
    </CurrentWeatherBlock>
  );
};

export default CurrentWeather;
