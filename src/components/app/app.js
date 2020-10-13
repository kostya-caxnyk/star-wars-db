import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

//import Row from '../Row';
/* import {
  PlanetList,
  StarshipList,
  PersonList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from '../sw-components'; */

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className="container">
        <ErrorBoundry>
          <SwapiServiceProvider value={this.swapiService}>
            <Header />
            <RandomPlanet />
            <PeoplePage />
          </SwapiServiceProvider>
        </ErrorBoundry>
      </div>
    );
  }
}
