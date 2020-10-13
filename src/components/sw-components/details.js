import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { SwapiServiceConsumer } from '../swapi-service-context';

const PersonDetails = ({ itemID }) => (
  <SwapiServiceConsumer>
    {({ getPerson, getPersonImage }) => (
      <ItemDetails itemID={itemID} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye color" />
        <Record field="birthYear" label="Birth year" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

const StarshipDetails = ({ itemID }) => (
  <SwapiServiceConsumer>
    {({ getStarship, getStarshipImage }) => (
      <ItemDetails itemID={itemID} getData={getStarship} getImageUrl={getStarshipImage}>
        <Record field="model" label="Model:" />
        <Record field="manufacturer" label="Manufacturer:" />
        <Record field="costInCredits" label="Cost in credits:" />
        <Record field="length" label="Length:" />
        <Record field="crew" label="Crew:" />
        <Record field="passengers" label="Passengers:" />
        <Record field="cargoCapacity" label="Cargo capacity:" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

const PlanetDetails = ({ itemID }) => (
  <SwapiServiceConsumer>
    {({ getPlanet, getPlanetImage }) => (
      <ItemDetails itemID={itemID} getData={getPlanet} getImageUrl={getPlanetImage}>
        <Record field="population" label="Population:" />
        <Record field="rotationPeriod" label="Rotation period:" />
        <Record field="diametr" label="Diameter:" />
        <Record field="climate" label="Climate:" />
      </ItemDetails>
    )}
  </SwapiServiceConsumer>
);

export { PersonDetails, PlanetDetails, StarshipDetails };
