import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <div className="container">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetPage />
            <StarshipPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
