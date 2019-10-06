import React from 'react';
import { connect } from 'react-redux';
import View from './view';

function Collect (props){
  return (<View />)
}

export default connect()(Collect);
