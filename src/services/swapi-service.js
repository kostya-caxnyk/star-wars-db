export default class SwapiService {
  _apiBase = 'https://swapi.dev/api/';

  async getResourse(url) {
    const result = await fetch(`${this._apiBase}${url}`);

    if (!result.ok) {
      throw new Error(`Couldn't fetch ${url}, we are sorry D:`);
    }

    return await result.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`people/`);
    return res.results.map((person) => this._transformPerson(person));
  }

  async getPerson(id) {
    const person = await this.getResourse(`people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllStarships() {
    const res = await this.getResourse(`starships/`);
    return res.results.map((starship) => this._transformStarship(starship));
  }

  async getStarship(id) {
    const starship = await this.getResourse(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  async getAllPlanets() {
    const res = await this.getResourse(`planets/`);
    return res.results.map((planet) => this._transformPlanet(planet));
  }

  async getPlanet(id) {
    let planet = await this.getResourse(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  _extractID(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractID(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diametr: planet.diameter,
    };
  }

  _transformPerson(person) {
    return {
      id: this._extractID(person),
      name: person.name,
      population: person.gender,
      rotationPeriod: person.birthYear,
      diametr: person.eyeColor,
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractID(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity,
    };
  }
}
