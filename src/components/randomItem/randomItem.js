import React, { Component } from 'react'

export default class RandomItem extends Component {
  render() {
    const { item } = this.props;
    return <>

      <div className="card flex-row flex-wrap">
        <div className="card-header border-0">
          <img src={item.img} alt="starship"></img>
        </div>
        <div className="card-block px-2">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">MGLT: {item.MGLT}</p>
          <p className="card-text">Consumables: {item.consumables}</p>
          <p className="card-text">Crew: {item.crew}</p>
          <p className="card-text">Capacity: {item.cargo_capacity}</p>
          <p className="card-text">Cost: {item.cost_in_credits}</p>
          <p className="card-text">Length: {item.length}</p>
          <p className="card-text">Manufacturer: {item.manufacturer}</p>
          <p className="card-text">Max Speed: {item.max_atmosphering_speed}</p>
          <p className="card-text">Class: {item.starship_class}</p>
        </div>
        <div class="w-100"></div>
        <div class="card-footer w-100 text-muted">
          Model: {item.model}        </div>
      </div>

    </>
  }
}