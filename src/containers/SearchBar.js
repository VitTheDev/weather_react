import React, { Component } from 'react';
import { fetchWeather } from '../components/actions';
import { connect } from 'react-redux';

class SearchBar extends Component {
  state = {
    inputValue: '',
    searchTerm: '',
  };

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.inputValue);
    console.log(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <form className="input-group">
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          placeholder="Type in a city"
        />
        <span className="input-group-btn">
          <button
            onClick={this.handleClick}
            type="submit"
            className="btn btn-secondary"
          >
            Submit
          </button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.fetchWeather,
  };
};

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
