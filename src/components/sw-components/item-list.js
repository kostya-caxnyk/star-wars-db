import { withData, withSwapiService, compose, withChildFunction } from '../hoc-helper';
import ItemList from '../item-list';

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const renderLabelForPerson = ({ name, birthYear }) => `${name} (${birthYear})`;
const renderLabelForPlanet = ({ name, climate }) => `${name} (${climate})`;
const renderLabelForStarship = ({ name, model }) => `${name} (${model})`;

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderLabelForPerson),
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderLabelForPlanet),
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderLabelForStarship),
)(ItemList);

export { PersonList, PlanetList, StarshipList };
