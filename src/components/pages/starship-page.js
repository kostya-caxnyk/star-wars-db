import React from 'react';

import ErrorBoundry from '../ErrorBoundry';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom';

const StarshipPage = ({ history }) => {
  return (
    <ErrorBoundry>
      <StarshipList onItemSelected={(itemID) => history.push(itemID)} />
    </ErrorBoundry>
  );
};

export default withRouter(StarshipPage);
