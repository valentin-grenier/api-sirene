import './App.scss';

import Header from '../Header/Header';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

const App = () => {
  // State result
  const [result, setResult] = useState({});

  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
};

export default App;
