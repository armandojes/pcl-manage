import React from 'react';
import style from './style';

function Search (props){
  return (
    <div className={style.search_content}>
      <input
        onChange={props.handleChange}
        type="text"
        name="search"
        className={style.input}
        autoComplete="off"
        placeholder="Buscar cliente..."
      />
    </div>
  )
}

export default Search;
