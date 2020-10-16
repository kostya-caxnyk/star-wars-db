import React from 'react';

import ErrorBoundry from '../ErrorBoundry';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../Row';
import { withRouter } from 'react-router-dom'

const PeoplePage = ({history, match}) => {
  return (
    <ErrorBoundry>
      <Row left={<PersonList onItemSelected={(id) => history.push(id)}/>} right={<PersonDetails itemID={match.params.id}/>}/>
    </ErrorBoundry>
  );
};

export default withRouter(PeoplePage);
