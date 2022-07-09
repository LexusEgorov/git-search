import React from 'react';
import Result from '../result/result';
import './style.css';

function ResultsList({repositories}){
  return(
    <ul className='results-list'>
      {repositories.length === 0 ?
        <h2 className='default'>Пусто</h2> :
        repositories.map((repository) => (
          <Result repo={repository} key={Date()}/>
        ))
      }
    </ul>
  );
}

export default ResultsList;
