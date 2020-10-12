import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ErrorBoundry from '../ErrorBoundry';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';
import ItemDetails from '../ItemDetails'

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {getPerson, getStarship, getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = <ItemDetails itemID={11} getData={getPerson} getImageUrl={getPersonImage}/>;
    const starshipDetails = <ItemDetails itemID={5} getData={getStarship} getImageUrl={getStarshipImage}/>


    return (
      <div className="container">
        <ErrorBoundry>
          <Header />
          <RandomPlanet />
          <PeoplePage />
          <Row left={personDetails} right={starshipDetails} />
        </ErrorBoundry>
      </div>
    );
  }
}

/* <div className="row mb2 margin-top">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={({name, climate}) => (`${name} (${climate})`)}
            />
          </div>
          <div className="col-md-6">
            <PeopleDetails personID={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2 margin-top">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={({name, climate}) => (`${name} (${climate})`)}
            />
          </div>
          <div className="col-md-6">
            <PeopleDetails personID={this.state.selectedPerson} />
          </div>
        </div>
         */
