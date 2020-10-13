import React from 'react';

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

export default ItemList;
