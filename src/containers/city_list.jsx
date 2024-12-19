import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import City from './city';

class CityList extends Component {
  renderList() {
    return this.props.cities.map((city) => {
      return (
        <City key={city.name} city={city} />
      );
    });
  }

  render() {
    return (
      <ul className="list-group cities">
        {this.renderList()}
      </ul>
    );
  }
}

function mapReduxStateToProps(reduxState) {
  return {
    cities: reduxState.cities
  };
}

export default connect(mapReduxStateToProps)(CityList);
