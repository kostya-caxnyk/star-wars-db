import React, { Component } from 'react';

import Row from '../Row';
import ErrorBoundry from '../ErrorBoundry';
import { PersonDetails, PersonList } from '../sw-components';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: null,
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id,
    });
  };

  render() {
    const { selectedPerson } = this.state;

    const itemList = <PersonList onItemSelected={this.onPersonSelected} />;

    const personDetails = <PersonDetails itemID={selectedPerson} />;

    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}
