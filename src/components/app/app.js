import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage } from '../pages';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet />
              <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact />
              <Route path="/people" component={PeoplePage} />
              <Route path="/planets" component={PlanetPage} />
              <Route path="/starships" exact component={StarshipPage} />
              <Route
                path="/starships/:id"
                render={({ match }) => {
                  return <StarshipDetails itemID={match.params.id} />;
                }}></Route>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
