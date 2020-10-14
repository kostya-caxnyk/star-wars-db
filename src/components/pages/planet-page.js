import React, { Component } from 'react';

import ErrorBoundry from '../ErrorBoundry';
import { PlanetDetails, PlanetList } from '../sw-components';
import Row from '../Row';

export default class PlanetPage extends Component {
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

    const itemsList = <PlanetList onItemSelected={this.onItemSelected} />;

    const itemDetails = <PlanetDetails itemID={selectedItem} />;

    return (
      <ErrorBoundry>
        <Row left={itemsList} right={itemDetails} />
      </ErrorBoundry>
    );
  }
}
