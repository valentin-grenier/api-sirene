// import { SetStateAction, useState } from 'react';
import './SearchBar.scss';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';

const SearchBar = () => {
  // State input value
  //const [inputValue, setInputValue] = useState('');

  // API
  const apiKey = 'Au7jZeGsdNBQ6oPYJI0ocx6uDzFghlwY';
  const apiUrl = 'https://data.siren-api.fr/v3/unites_legales/840004394';

  const getData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          'X-Client-Secret': apiKey,
        },
      });
      console.log(response);
    } catch (error) {
      console.error('Erreur lors de la récupération des données : ' + error);
    }
  };

  // Handle input change
  // const handleChange = (event: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setInputValue(event.target.value);
  // };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Get data from the API
    getData();
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
          <input
            type="search"
            name="search-siret"
            placeholder="Numéro SIRET"
            // onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
