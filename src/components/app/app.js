import React, { Component } from 'react'
import Header from '../header'
import Jumbotron from '../jumbotron'
import Details from '../details/details'
import ItemList from '../list'
import RandomItem from '../randomItem'
import WorkWithApi from '../services/ApiRequest'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export default class App extends Component {
  state = {
    randomItem: {},
    starships: {},
    people: {},
    planets: {},
    selected: {}
  }

  worker = new WorkWithApi();
  constructor() {
    super();
    this.getRandom();
    this.fillAll();
  }

  getRandom = async () => {
    let rnd = await this.worker.getRandomStarship();
    this.setState(() => {
      return { randomItem: rnd }
    })
  }

  fillAll = async () => {
    let starshipsArr = await this.worker.getAll('starships');
    let peopleArr = await this.worker.getAll('people');
    let planetsArr = await this.worker.getAll('planets');
    this.setState(() => {
      return { people: peopleArr, planets: planetsArr, starships: starshipsArr }
    })
  }

  select = (item) => {
    this.setState(() => {
      return { selected: item }
    })
  }

  render() {
    return <>
      <div className="container-fluid p-0">
        <Router>

          <Header />

          <Switch>
            <div className="container">
              <Route exact path='/'>
                <Jumbotron />
                <RandomItem item={this.state.randomItem} />
              </Route>
              <Route exact path='/people'>
                <ItemList arr={this.state.people} onSelected={this.select} />
                <Details selected={this.state.selected} />
              </Route>
              <Route exact path='/starships'>
                <ItemList arr={this.state.starships} onSelected={this.select} />
                <Details selected={this.state.selected} />
              </Route>
              <Route exact path='/planets'>
                <ItemList arr={this.state.planets} onSelected={this.select} />
                <Details selected={this.state.selected} />
              </Route>
            </div>
          </Switch>

        </Router>

      </div>
    </>
  }
}
