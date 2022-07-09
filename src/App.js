import React, { useState } from 'react';

import Api from './api';
import ResultsList from './components/results-list/results-list';
import SearchForm from './components/search-form/search-form';
import RepositoriesModel from './repositories-model';

const api = new Api();
const repositoriesModel = new RepositoriesModel(api);

function App() {
  const [repositories, setRepositories] = useState([]);
  
  return (
    <div className="App">
      <SearchForm 
        setRepositories={
          (repositories) => {
            setRepositories(repositories);
          }
        }
        repositoriesModel={repositoriesModel} 
      />
      <ResultsList repositories={repositories}/>
    </div>
  );
}

export default App;
