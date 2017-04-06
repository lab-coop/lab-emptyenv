'use strict';

import React from 'react';
import './header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <span>{this.props.name}</span>
      </div>
    );
  }
}

module.exports = Header;

