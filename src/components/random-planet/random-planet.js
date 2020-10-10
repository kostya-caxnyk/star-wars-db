import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service.js';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.state = {
      planet: {},
      loading: true,
      error: false,
    };

    this.swapiService = new SwapiService();

    this.onError = (err) => {
      this.setState({
        error: true,
        loading: false,
      });
    };

    this.onPlanetLoaded = (planet) => {
      this.setState({
        planet,
        loading: false,
      });
    };

    this.updatePlanet();

    setInterval(this.updatePlanet.bind(this), 3000);
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25 + 2);
    this.swapiService.getPlanet(id).then(this.onPlanetLoaded).catch(this.onError);
  }

  render() {
    let { planet, loading, error } = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  let { id, name, population, rotationPeriod, diametr } = planet;

  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        alt={name}
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diametr}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
