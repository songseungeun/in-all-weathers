import React from "react";
import { Api } from "../api";
import useAsync from "./useAsync";
import CurrentWeather from "../Components/CurrentWeather";
import HourlyWeather from "../Components/HourlyWeather";
import DailyWeather from "../Components/DailyWeather";

const lat = "37.57";
const lon = "126.98";

async function getWeather() {
  const { data } = await Api.getWeather(lat, lon);
  return data;
}

const WeatherContainer = () => {
  const [state, refetch] = useAsync(getWeather, []);

  const { loading, data: weather, error } = state;

  if (loading) return <div>loading..</div>;
  if (error) return <div>error</div>;
  if (!weather) return null;

  // console.log("Weather:", weather);

  const { current, hourly, daily, timezone } = weather;

  // const { temp, feels_like, dt } = weather.current;

  // const { main, description, icon } = weather.current.weather[0];

  return (
    <>
      <CurrentWeather current={current} daily={daily} timezone={timezone} />
      <HourlyWeather hourly={hourly} />
      <DailyWeather daily={daily} />
    </>
  );
};

export default WeatherContainer;
