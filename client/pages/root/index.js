'use strict';

import React from 'react';
import { connect } from 'react-redux'

const Header = require('./header');

function Component(test) {
  class Root extends React.Component {
    componentWillMount() {
      this.props.receiveTest();
    }

    render() {
      return (
        <div>
          <Header name="Test" />
          <div>{this.props.test.testProperty}</div>
        </div>
      );
    }
  }

  const data = ({test}) => ({
    test
  });

  const operations = dispatch => ({
    receiveTest: () => {
      dispatch(test.myAsyncFunction());
    }
  });


  return connect(data, operations)(Root);
}

Component.deps = ['test'];
module.exports = Component;
