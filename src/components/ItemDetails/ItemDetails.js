import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './ItemDetails.css';

const Record = ({ label, field, item }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDeatails extends Component {
  state = {
    item: null,
    loading: true,
    image: null,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemID !== this.props.itemID) {
      this.setState({
        loading: true,
      });
      this.updateItem();
    }
  }

  updateItem() {
    const { itemID, getData, getImageUrl } = this.props;

    if (!itemID) {
      return;
    }
    getData(itemID).then((item) => {
      this.setState({
        item,
        loading: false,
        image: getImageUrl(item),
      });
    });
  }

  render() {
    const { loading, item, image } = this.state;

    if (!item) {
      return <span>Select a person from the list</span>;
    }

    if (loading) {
      return (
        <div className="item-details card">
          <Spinner />
        </div>
      );
    }

    const { name } = item;

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt={name} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, index) => {
              return React.cloneElement(child, {item});
            })}
          </ul>
        </div>
      </div>
    );
  }
}
