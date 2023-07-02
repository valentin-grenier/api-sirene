// import { SetStateAction, useState } from 'react';
import { ChangeEvent } from 'react';
import './SearchBar.scss';
import Button from './Button/Button';

interface SearchBarProps {
  fetchAPI: Function;
  siren: string;
  setSiren: Function;
}

const SearchBar = ({ fetchAPI, siren, setSiren }: SearchBarProps) => {
  // Handle input change
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
          <input
            type="search"
            name="search-siret"
            placeholder="Numéro SIRET"
            value={siren}
            onChange={handleChange}
            maxLength={9}
          />
        </div>
        <Button />
      </form>
      <span>Il doit contenir 9 chiffres</span>
    </div>
  );
};

export default SearchBar;
