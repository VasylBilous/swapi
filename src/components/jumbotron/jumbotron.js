import React, { Component } from 'react'

export default class Jumbotron extends Component {
  render() {
    return <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Swapi Demo</h1> 
        </div>
      </div>
    </>
  }
}