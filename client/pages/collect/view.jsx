import React from 'react';
import style from './style';
import Container from '../../components/container';
import Loading from '../../components/loading';
import LoadingPage from '../../components/loading_page';


function View (props){

  if (props.loading) return (<LoadingPage />)

  if (props.data) return 'hello with data';

  return null;
}

export default View;
