import React from 'react';
import './style.css';

function Result({repo}){
  return(
    <li>
      <div className='user-info'>
        <h2>{repo.userName}</h2>
        <img src={repo.picture} alt="Аватар пользователя" width="50" height="50"/>
      </div>
      <div className='repo-info'>
        <a href={repo.link}>{repo.repoName}</a>
        <p>{repo.description}</p>
      </div>
    </li>
  );
}

export default Result;
