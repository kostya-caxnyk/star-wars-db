import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helper';

const PersonDetails = (props) => {
  return (
    <ItemDetails {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye color" />
      <Record field="birthYear" label="Birth year" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PersonDetails);
