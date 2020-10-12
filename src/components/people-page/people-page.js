import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../ItemDetails';
import SwapiService from '../../services/swapi-service';
import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  };

  swapiService = new SwapiService();

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson } = this.state;
    const { getPerson, getPersonImage } = this.swapiService;

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name,  birthYear }) => `${name} (${birthYear})`}
      />
    );

    const personDetails = (
      <ItemDetails itemID={selectedPerson} getData={getPerson} getImageUrl={getPersonImage} />
    );

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
