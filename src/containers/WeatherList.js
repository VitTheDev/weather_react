import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/Map';

class WeatherList extends Component {
  renderWeatherData = (cityData) => {
    const temps = cityData.list.map((weather) => weather.main.temp);
    const humidity = cityData.list.map((weather) => weather.main.humidity);
    const pressure = cityData.list.map((weather) => weather.main.pressure);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;
    console.log(temps);
    return (
      <tr key={cityData.city.id}>
        <td className="align-middle">
          <GoogleMap lat={lat} lon={lon} />
        </td>
        <td className="align-middle">
          <Chart color="blue" data={temps} calculate={true} units="C" />
        </td>
        <td className="align-middle">
          <Chart color="red" data={pressure} units="hPa" />
        </td>
        <td className="align-middle">
          <Chart color="green" data={humidity} units="%" />
        </td>
      </tr>
    );
  };

  render() {
    console.log(this.props.weatherData);
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (Celsius)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>{this.props.weatherData.map(this.renderWeatherData)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weatherData: state.fetchedWeather,
  };
};

export default connect(mapStateToProps)(WeatherList);
