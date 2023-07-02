// import { SetStateAction, useState } from 'react';
import './SearchBar.scss';
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react';

interface SearchBarProps {
  fetchAPI: Function;
  siren: string;
  setSiren: Function;
}

const SearchBar = ({ fetchAPI, siren, setSiren }: SearchBarProps) => {
  // Handle input change
  const handleChange = (event) => {
    setSiren(event.target.value);
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    fetchAPI();
  };

  return (
    <div className="searchbar">
      <h2>
        Recherchez une entreprise inscrite au répertoire SIRENE en un
        clic&nbsp;!
      </h2>
      <h3>Le numéro SIREN de l'entreprise</h3>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <BsSearch />
          <input
            type="search"
            name="search-siret"
            placeholder="Numéro SIRET"
            value={siren}
            onChange={handleChange}
            maxLength={9}
          />
        </div>
      </form>
      <span>Il doit contenir 9 chiffres</span>
    </div>
  );
};

export default SearchBar;
