import React from 'react';

import PropTypes from 'prop-types';
import './item-list.css';

const ItemList = (props) => {
  const { onItemSelected, children: renderItem, data } = props;
  const items = data.map((item) => {
    const label = renderItem(item);
    const { id } = item;

    return (
      <li className="list-group-item" key={id} onClick={() => onItemSelected(id)}>
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group">{items}</ul>;
};

ItemList.defaultProps = {
  onItemSelected: () => {},
};

ItemList.defaultProps = {
  onItemSelected: PropTypes.func,
  children: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemList;
