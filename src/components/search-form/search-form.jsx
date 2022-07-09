import React from 'react';
import { useState } from 'react';

function SearchForm({setRepositories, repositoriesModel}){
  const [searchState, setSearch] = useState('');
  repositoriesModel.setObserver(setRepositories);
  return (
    <form className='search-form'>
      <input type="text" value={searchState} onChange={(evt) => setSearch(evt.target.value)}/>
      <button
        onClick={
          (evt) => {
            evt.preventDefault();
            repositoriesModel.getRepositories(searchState);
          }
        }
      >
        Click
      </button>
    </form>
  );
}

export default SearchForm;
