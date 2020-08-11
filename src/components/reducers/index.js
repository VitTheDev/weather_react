import { combineReducers } from 'redux';

const fetchWeatherReducer = (state = [], action) => {
  if (action.type === 'FETCH_WEATHER') {
    return [action.payload, ...state];
  }
  return state;
};

export default combineReducers({
  fetchedWeather: fetchWeatherReducer,
});
