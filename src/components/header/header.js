import React, { Component } from 'react';

import './header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header d-flex">
      <h3>
        <a href="https://www.google.com">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="https://www.google.com">People</a>
        </li>
        <li>
          <a href="https://www.google.com">Planets</a>
        </li>
        <li>
          <a href="https://www.google.com">Starships</a>
        </li>
      </ul>
    </div>
    );
  }
}
