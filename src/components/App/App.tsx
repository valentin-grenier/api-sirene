import './App.scss';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Result from '../Result/Result';
import Error from '../Error/Error';
import { useState } from 'react';

const App = () => {
  const [siren, setSiren] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const [errorStatus, setErrorStatus] = useState(true);
  const [errorMessage, setErrorMessage] = useState('Une erreur est survenue.');

  // Get the data from the API through Express server
  const fetchAPI = async () => {
    fetch(`http://localhost:3000/api/siren/${siren}`)
      .then((response) => {
        if (response.status === 404) {
          setErrorStatus(true);
        }
        return response.json();
      })
      .then((data) => {
        setErrorStatus(false);
        setSearchResult(data.unite_legale);
      })
      .catch((error) => {
        setErrorStatus(true);
        setErrorMessage('Une erreur est survenue.');
      });
  };

  return (
    <div className="App">
      <div className="header">
        <Header />
        <SearchBar fetchAPI={fetchAPI} siren={siren} setSiren={setSiren} />
      </div>
      <Result searchResult={searchResult} />
      <Error errorStatus={errorStatus} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
