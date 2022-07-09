import React from 'react';
import Result from '../result/result';


function ResultsList({repositories}){
  return(
    <ul className='results-list'>
      {repositories.length === 0 ?
        <h2>Ничего не нашлось</h2> :
        repositories.map((repository) => (
          <Result repo={repository} key={Date()}/>
        ))
      }
    </ul>
  );
}

export default ResultsList;
