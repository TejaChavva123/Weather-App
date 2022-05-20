import logo from './logo.svg';
import './App.css';
import FormComponent from './Components/formComponent';
import axios from 'axios'

import React, { Component } from 'react'
import WeatherComponent from './Components/weatherComponent';
import Heading from './Components/Heading';
const api_key = "28cee576a983622130ba862a241c40b8";
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       city:"",
       country:"",
       temp:"",
       descr: "",
       err:false
    }
  }
  converttocelsius(temp){
    let celsius = Math.floor(temp - 273.15);
    return celsius;
  }
  getWeather = async e => {
    e.preventDefault();
    const country_name = e.target.elements.country.value;
    const city_name = e.target.elements.city.value;
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city_name},${country_name}&appid=${api_key}`).then(response=>{
      console.log(response)
      this.setState({
        city: `${response.data.name},${response.data.sys.country}`,
        country: `${response.data.sys.country}`,
        temp: this.converttocelsius(response.data.main.temp),
        descr: response.data.weather[0].description,
        err: false
      })
    }).catch(err=>this.setState({err:true}))
  };
  render() {
    return (
      <div className='App'>
        <Heading />
        <FormComponent loadweather={this.getWeather}/>
        {!this.state.err ?
          (<WeatherComponent cityname={this.state.city} temp={this.state.temp} description={this.state.descr}/>) :
          <h1>Pls Enter Correct Details</h1>}
      </div>
    )
  }
}

export default App;
