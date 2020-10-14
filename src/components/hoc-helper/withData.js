import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const withData = (View) => {
  return class extends Component {
    state = {
      data: null,
      hasError: false,
    };

    componentDidCatch() {
      this.setState({
        hasError: true,
      });
    }

    componentDidMount() {
      this.props
        .getData()
        .then((data) => {
          this.setState({
            data,
          });
        })
        .catch(() => {
          this.setState({
            hasError: true,
          });
        });
    }

    render() {
      const { data, hasError } = this.state;
      if (!data) {
        return <Spinner />;
      }

      if (hasError) {
        return <ErrorIndicator />;
      }

      return <View {...this.props} data={data} />;
    }
  };
};

export default withData;
