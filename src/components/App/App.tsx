import './App.scss';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import Result from '../Result/Result';

import { useState } from 'react';

const App = () => {
  // State result
  const [result, setResult] = useState({});

  return (
    <div className="App">
      <div className="header">
        <Header />
        <SearchBar />
      </div>
      <Result />
    </div>
  );
};

export default App;
