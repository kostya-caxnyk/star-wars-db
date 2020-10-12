import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-list.css';

export default class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;

    getData().then((itemList) => {
      this.setState({
        itemList,
      });
    });
  }

  renderItems(arr) {
    return arr.map((item) => {
      const label = this.props.renderItem(item);
      const { id } = item;

      return (
        <li className="list-group-item" key={id} onClick={() => this.props.onItemSelected(id)}>
          {label}
        </li>
      );
    });
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    return <ul className="item-list list-group">{this.renderItems(itemList)}</ul>;
  }
}
