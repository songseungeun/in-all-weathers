import React from "react";
import styled from "styled-components";

const HourlyList = styled.ul`
  display: flex;
  align-items: flex-end;

  padding: 10px;

  background-color: #ccc;
  text-align: center;

  list-style: none;
  overflow: scroll;
`;
const HourlyItem = styled.li`
  display: flex;
  flex-direction: column;

  margin: 0 10px 0 0;
  background-color: #ddd;
`;

const WeatherIcon = styled.div`
  width: 60px;
  height: 60px;

  margin: 0 auto;

  background-image: ${(props) =>
    `url("http://openweathermap.org/img/wn/${props.icon}@2x.png")`};
  background-position: center center;
  background-size: cover;
`;
const HourlyWeather = ({ hourly }) => {
  // console.log("Hourly:", hourly);

  return (
    <div>
      <h3>HourlyWeather</h3>
      <HourlyList>
        {hourly.map((hourlyWeather) => {
          const hour = new Date(hourlyWeather.dt * 1000).getHours();
          // console.log(hour);
          return (
            <HourlyItem key={hourlyWeather.dt}>
              {hour ? null : <strong>내일</strong>}
              <em>{hour}시</em>
              <WeatherIcon icon={hourlyWeather.weather[0].icon} />
              <span>{Math.floor(hourlyWeather.temp)}˚</span>
            </HourlyItem>
          );
        })}
      </HourlyList>
    </div>
  );
};

export default HourlyWeather;
