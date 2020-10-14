import React, { Component } from 'react';

import ErrorBoundry from '../ErrorBoundry';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../Row';

export default class PeoplePage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { selectedItem } = this.state;

    const itemsList = <PersonList onItemSelected={this.onItemSelected} />;

    const itemsDetails = <PersonDetails itemID={selectedItem} />;

    return (
      <ErrorBoundry>
        <Row left={itemsList} right={itemsDetails} />
      </ErrorBoundry>
    );
  }
}
