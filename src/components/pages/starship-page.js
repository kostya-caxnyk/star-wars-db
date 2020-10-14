import React, { Component } from 'react';

import ErrorBoundry from '../ErrorBoundry';
import { StarshipDetails, StarshipList } from '../sw-components';
import Row from '../Row';

export default class StarshipPage extends Component {
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

    const itemsList = <StarshipList onItemSelected={this.onItemSelected} />;

    const itemDetails = <StarshipDetails itemID={selectedItem} />;

    return (
      <ErrorBoundry>
        <Row left={itemsList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
