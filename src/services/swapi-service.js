export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/';
  _imageBase = 'https://starwars-visualguide.com/assets/img/';

  getResourse = async (url) => {
    const result = await fetch(`${this._apiBase}${url}`);

    if (!result.ok) {
      throw new Error(`Couldn't fetch ${url}, we are sorry D:`);
    }

    return result.json();
  };

  getAllPeople = async () => {
    const res = await this.getResourse(`people/`);
    return res.results.map((person) => this._transformPerson(person));
  };

  getPerson = async (id) => {
    const person = await this.getResourse(`people/${id}/`);
    return this._transformPerson(person);
  };

  getAllStarships = async () => {
    const res = await this.getResourse(`starships/`);
    return res.results.map((starship) => this._transformStarship(starship));
  };

  getStarship = async (id) => {
    const starship = await this.getResourse(`starships/${id}/`);
    return this._transformStarship(starship);
  };

  getAllPlanets = async () => {
    const res = await this.getResourse(`planets/`);
    return res.results.map((planet) => this._transformPlanet(planet));
  };

  getPlanet = async (id) => {
    let planet = await this.getResourse(`planets/${id}/`);
    return this._transformPlanet(planet);
  };

  _extractID = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformPlanet = (planet) => {
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diameter,
      climate: planet.climate,
    };
  };

  _transformPerson = (person) => {
    return {
      id: this._extractID(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}planets/${id}.jpg`;
  };
}
