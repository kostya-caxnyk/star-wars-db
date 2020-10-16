import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { PeoplePage, PlanetPage, StarshipPage, LoginPage, SecretPage } from '../pages';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../swapi-service-context';

import './app.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {
  swapiService = new SwapiService();

  state = {
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState((state) => ({ isLoggedIn: !state.isLoggedIn }));
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService}>
          <Router>
            <div className="container">
              <Header />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetPage} />
                <Route path="/starships" exact component={StarshipPage} />
                <Route
                  path="/starships/:id"
                  render={({ match }) => {
                    return <StarshipDetails itemID={match.params.id} />;
                  }}
                />
                <Route path="/secret" render={() => <SecretPage isLoggedIn={isLoggedIn} />} />
                <Route
                  path="/login"
                  component={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />}
                />
                <Route render={() => <h2>Page not fount</h2>}/>
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
