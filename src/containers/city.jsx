import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectCity from '../actions/index';

function City(props) {
  return (
    <li
      className="list-group-item"
      onClick={() => props.selectCity(props.city)}
      onKeyUp={() => props.selectCity(props.city)}
    >
      {props.city.name}
    </li>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(City);
