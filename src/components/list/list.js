import React, { Component } from 'react'

export default class ItemList extends Component {

  render() {
    const { arr } = this.props;
    return (arr.map(item => {
      return <>
        <ul className="list-group">
          <li className="list-group-item" onClick={() => this.props.onSelected(item)}>{item.name}</li>
        </ul>
      </>
    }))
  }
}