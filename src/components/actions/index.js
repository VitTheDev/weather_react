import axios from 'axios';
const apiKey = 'a47ddf44b39896e272b454c83326c68d';

export const fetchWeather = (city) => async (dispatch) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},cz&appid=${apiKey}`
  );

  dispatch({ type: 'FETCH_WEATHER', payload: response.data });
};
