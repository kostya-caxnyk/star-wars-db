import React from 'react';

import withData from '../hoc-helper';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();
const { getAllPeople, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderLabelForPerson = ({ name, birthYear }) => `${name} (${birthYear})`;
const renderLabelForPlanet = ({ name, climate }) => `${name} (${climate})`;
const renderLabelForStarship = ({ name, model }) => `${name} (${model})`;

const PersonList = withData(withChildFunction(ItemList, renderLabelForPerson), getAllPeople);

const PlanetList = withData(withChildFunction(ItemList, renderLabelForPlanet), getAllPlanets);

const StarshipList = withData(withChildFunction(ItemList, renderLabelForStarship), getAllStarships);

export { PersonList, PlanetList, StarshipList };
