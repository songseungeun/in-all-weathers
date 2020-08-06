import React from "react";
import styled from "styled-components";

const DailyList = styled.ul`
  padding: 10px;

  background-color: #ccc;
  text-align: center;

  list-style: none;
`;
const DailyItem = styled.li`
  display: flex;
  align-items: center;

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

const DailyWeather = ({ daily }) => {
  // console.log("Daily:", daily);
  return (
    <div>
      <h3>DailyWeather</h3>
      <DailyList>
        {daily.map((dailyWeather) => {
          const dayNames = [
            "일요일",
            "월요일",
            "화요일",
            "수요일",
            "목요일",
            "금요일",
            "토요일",
          ];
          const day = dayNames[new Date(dailyWeather.dt * 1000).getDay()];
          const month = new Date(dailyWeather.dt * 1000).getMonth() + 1;
          const date = new Date(dailyWeather.dt * 1000).getDate();
          // console.log(hour);
          return (
            <DailyItem key={dailyWeather.dt}>
              <em>
                {day}&nbsp;
                {month}/{date}
              </em>
              <WeatherIcon icon={dailyWeather.weather[0].icon} />
              <span>{Math.floor(dailyWeather.temp.day)}˚</span>
            </DailyItem>
          );
        })}
      </DailyList>
    </div>
  );
};

export default DailyWeather;
