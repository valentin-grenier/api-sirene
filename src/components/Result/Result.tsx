import { useEffect } from 'react';
import './Result.scss';
import {
  MdOutlineNumbers,
  MdBusiness,
  MdDateRange,
  MdOutlineDriveFileRenameOutline,
  MdHome,
  MdPermContactCalendar,
} from 'react-icons/md';

interface DataTypes {
  length: Number | undefined;
  siren: number | undefined;
  prenom_1: string | undefined;
  nom: string | undefined;
  categorie_entreprise: string | undefined;
  date_creation: number | undefined;
  etablissement_siege: {
    enseigne_1: string | undefined;
    numero_voie: number | undefined;
    type_voie: string | undefined;
    libelle_voie: string | undefined;
    code_postal: number | undefined;
    libelle_commune: string | undefined;
  };
}

interface ResultProps {
  searchResult: DataTypes;
}

const Result = ({ searchResult }: ResultProps) => {
  const data = searchResult;

  useEffect(() => {}, [searchResult]);

  return (
    <div>
      {data ? (
        <div className="result">
          <div id="siret">
            <h3>
              <MdOutlineNumbers />
              SIREN
            </h3>
            <p>{data.siren}</p>
          </div>
          <div id="owner">
            <h3>
              <MdPermContactCalendar />
              Gérant
            </h3>
            <p>
              {data.prenom_1} {data.nom}
            </p>
          </div>
          <div id="type">
            <h3>
              <MdBusiness />
              Type d'entreprise
            </h3>
            <p>{data.categorie_entreprise}</p>
          </div>
          <div id="creation-date">
            <h3>
              <MdDateRange />
              Date de création
            </h3>
            <p>{data.date_creation}</p>
          </div>
          <div id="name">
            <h3>
              <MdOutlineDriveFileRenameOutline />
              Nom de l'enseigne
            </h3>
            <p>{data.etablissement_siege.enseigne_1}</p>
          </div>
          <div id="address">
            <h3>
              <MdHome />
              Adresse du siège
            </h3>
            <p>{`${data.etablissement_siege.numero_voie} ${data.etablissement_siege.type_voie} ${data.etablissement_siege.libelle_voie}, ${data.etablissement_siege.code_postal} ${data.etablissement_siege.libelle_commune}`}</p>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Result;
