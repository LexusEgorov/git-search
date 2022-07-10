import React from 'react';
import './style.css';

function Result({repo}){
  return(
    <li className='result'>
      <div className='container'>
        <div className='user-info'>
          <h2>{repo.userName}</h2>
          <img src={repo.picture} alt="Аватар пользователя" width="50" height="50"/>
        </div>
        <div className='repo-info'>
          <a href={repo.link}><h3>{repo.repoName}</h3></a>
          <p>
            {
              repo.description ?
              repo.description.slice(0, 300) + (repo.description.length <= 300 ? '' : '...') :
              ''
            }
          </p>
        </div>
      </div>
    </li>
  );
}

export default Result;
