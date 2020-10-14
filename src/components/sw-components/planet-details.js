import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helper';

const PlanetDetails = (props) => (
  <ItemDetails {...props}>
    <Record field="population" label="Population:" />
    <Record field="rotationPeriod" label="Rotation period:" />
    <Record field="diametr" label="Diameter:" />
    <Record field="climate" label="Climate:" />
  </ItemDetails>
);

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage,
  };
};

export default withSwapiService(mapMethodsToProps)(PlanetDetails);
