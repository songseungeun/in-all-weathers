import React, { useState } from "react";
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

const CurrentDetail = styled.ul`
  display: flex;
  flex-wrap: wrap;

  height: ${(props) => (props.openDetail ? "200px" : "30px")};
  overflow: hidden;

  margin: 10px;
  padding: 10px;

  background-color: #fff;

  transition: height 0.3s ease-in-out;
  list-style: none;
  cursor: pointer;
`;

const DetailItem = styled.li`
  width: 50%;

  padding: 10px;

  border-bottom: 1px solid #eee;
`;

const CurrentWeather = ({ current, daily, timezone }) => {
  const [openDetail, setOpenDetail] = useState(false);
  console.log("Current:", current);
  // console.log("Daily:", daily[0]);
  const { temp, feels_like, humidity } = current;
  const { main, description, icon } = current.weather[0];
  const chanceOfRain = Math.round(daily[0].pop * 10) * 10;

  const onDetail = () => {
    setOpenDetail(!openDetail);
  };

  return (
    <CurrentWeatherBlock>
      <h3>in all weathers</h3>
      <h4>{timezone}</h4>
      <h4>{description}</h4>
      {chanceOfRain >= 30 ? <span>{chanceOfRain}%</span> : null}
      <WeatherIcon icon={icon} />
      <h1>{Math.floor(temp)}˚</h1>
      <h3>체감온도 {Math.floor(feels_like)}˚</h3>
      <em>
        최저 {Math.floor(daily[0].temp.min)}˚/ 최고{" "}
        {Math.floor(daily[0].temp.max)}˚
      </em>
      <CurrentDetail onClick={onDetail} openDetail={openDetail}>
        <DetailItem>비 올 확률 {chanceOfRain}%</DetailItem>
        <DetailItem>습도 {humidity}%</DetailItem>
        <DetailItem>비 올 확률 {chanceOfRain}%</DetailItem>
        <DetailItem>습도 {humidity}%</DetailItem>
        <DetailItem>비 올 확률 {chanceOfRain}%</DetailItem>
        <DetailItem>습도 {humidity}%</DetailItem>
      </CurrentDetail>
    </CurrentWeatherBlock>
  );
};

export default CurrentWeather;
