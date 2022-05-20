import React, { Component } from 'react'

const WeatherComponent = props => {
    return (
      <div>
        <div>
          <h1>{props.cityname}</h1>
          {props.temp ? (
            <h1>{props.temp}&deg;</h1>
          ) : null}
          <h3>
              {props.description.toUpperCase()}
          </h3>
        </div>
      </div>
    );
  };

export default WeatherComponent