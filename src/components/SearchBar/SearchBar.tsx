import { useState } from 'react';
import './SearchBar.scss';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  // State input value
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="searchbar">
      <h2>
        Recherchez une entreprise inscrite au répertoire SIRENE en un
        clic&nbsp;!
      </h2>
      <h3>Le numéro SIRET de l'entreprise</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <BsSearch />
          <input type="search" name="search-siret" placeholder="Numéro SIRET" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
