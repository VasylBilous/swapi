import React, { Component } from 'react'

export default class Details extends Component {

  renderStarship(selected) {
    return <>
      <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
          <img src={selected.img} alt="starship"></img>
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">{selected.name}</h4>
          <p className="card-text">MGLT: {selected.MGLT}</p>
          <p className="card-text">Consumables: {selected.consumables}</p>
          <p className="card-text">Crew: {selected.crew}</p>
          <p className="card-text">Capacity: {selected.cargo_capacity}</p>
          <p className="card-text">Cost: {selected.cost_in_credits}</p>
          <p className="card-text">Length: {selected.length}</p>
          <p className="card-text">Manufacturer: {selected.manufacturer}</p>
          <p className="card-text">Max Speed: {selected.max_atmosphering_speed}</p>
          <p className="card-text">Class: {selected.starship_class}</p>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
          Model: {selected.model}        </div>
      </div>
    </>
  }

  renderCharacter(selected) {
    return <>
      <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
          <img src={selected.img} alt="starship"></img>
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">{selected.name}</h4>
          <p className="card-text">Birth year: {selected.birth_year}</p>
          <p className="card-text">Eye color: {selected.eye_color}</p>
          <p className="card-text">Gender: {selected.gender}</p>
          <p className="card-text">Hair color: {selected.hair_color}</p>
          <p className="card-text">Height: {selected.height}</p>
          <p className="card-text">Mass: {selected.mass}</p>
          <p className="card-text">Skin color: {selected.skin_color}</p>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
          Character        </div>
      </div>
    </>
  }

  renderPlanet(selected) {
    return <>
      <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
          <img src={selected.img} alt="starship"></img>
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">{selected.name}</h4>
          <p className="card-text">Climate: {selected.climate}</p>
          <p className="card-text">Diameter: {selected.diameter}</p>
          <p className="card-text">Gravity: {selected.gravity}</p>
          <p className="card-text">Orbital period: {selected.orbital_period}</p>
          <p className="card-text">Population: {selected.population}</p>
          <p className="card-text">Rotation period: {selected.rotation_period}</p>
          <p className="card-text">Surface water: {selected.surface_water}</p>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
        Terrain: {selected.terrain}        </div>
      </div>
    </>
  }

  render() {
    const { selected } = this.props;

    switch (selected.type) {
      case 'starships':
        return this.renderStarship(selected);
      case 'characters':
        return this.renderCharacter(selected);
      case 'planets':
        return this.renderPlanet(selected);
      default:
        return <> </>
    }
  }
}