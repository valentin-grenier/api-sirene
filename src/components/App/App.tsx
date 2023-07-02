import './App.scss';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Result from '../Result/Result';
import { useState } from 'react';

const App = () => {
  const [siren, setSiren] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const [errorMessage, setErrorMessage] = useState('');

  // Get the data from the API through Express server
  const fetchAPI = async () => {
    fetch(`http://localhost:3000/api/siren/${siren}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.unite_legale);
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Une erreur est survenue');
      });
  };

  return (
    <div className="App">
      <div className="header">
        <Header />
        <SearchBar fetchAPI={fetchAPI} siren={siren} setSiren={setSiren} />
      </div>
      <Result searchResult={searchResult} />
    </div>
  );
};

export default App;
