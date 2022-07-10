import React from 'react';
import Result from '../result/result';
import './style.css';

function idGenerator(){
  let id = 0;
  return function(){
    return id++;
  }
}

const getId = new idGenerator();

function ResultsList({repositories}){
  return(
    <ul className='results-list'>
      {repositories.length === 0 || repositories === null ?
        <h2 className='default'>Пусто</h2> :
        repositories[0] === -1 ?
          <h2 className='default'>Произошла ошибка</h2> :
          repositories.map((repository) => (
            <Result repo={repository} key={getId()}/>
        ))
      }
    </ul>
  );
}

export default ResultsList;
