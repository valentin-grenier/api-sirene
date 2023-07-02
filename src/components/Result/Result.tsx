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
  date_creation: Date;
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

  const formatDate = () => {
    if (data) {
      const isoDate = new Date(data.date_creation);

      const day = String(isoDate.getDate()).padStart(2, '0');
      const month = String(isoDate.getMonth() + 1).padStart(2, '0');
      const year = String(isoDate.getFullYear()).padStart(2, '0');

      return `${day}/${month}/${year}`;
    }
  };

  const date = formatDate();

  useEffect(() => {}, [searchResult]);

  return (
    <div>
      {data ? (
        <div className="result">
          {data.siren !== null && (
            <div id="siren">
              <h3>
                <MdOutlineNumbers />
                SIREN
              </h3>
              <p>{data.siren}</p>
            </div>
          )}

          {(data.prenom_1 !== null || data.nom !== null) && (
            <div id="owner">
              <h3>
                <MdPermContactCalendar />
                Gérant
              </h3>
              <p>
                {data.prenom_1} {data.nom}
              </p>
            </div>
          )}

          {data.categorie_entreprise !== null && (
            <div id="type">
              <h3>
                <MdBusiness />
                Type d'entreprise
              </h3>
              <p>{data.categorie_entreprise}</p>
            </div>
          )}

          {data.date_creation !== null && (
            <div id="creation-date">
              <h3>
                <MdDateRange />
                Date de création
              </h3>
              <p>{date}</p>
            </div>
          )}

          {data.etablissement_siege.enseigne_1 !== null && (
            <div id="name">
              <h3>
                <MdOutlineDriveFileRenameOutline />
                Nom de l'enseigne
              </h3>
              <p>{data.etablissement_siege.enseigne_1}</p>
            </div>
          )}

          {data.etablissement_siege.libelle_commune !== null && (
            <div id="address">
              <h3>
                <MdHome />
                Adresse du siège
              </h3>
              <p>
                {`${data.etablissement_siege.numero_voie} ${data.etablissement_siege.type_voie} ${data.etablissement_siege.libelle_voie}, ${data.etablissement_siege.code_postal} ${data.etablissement_siege.libelle_commune}`.toLowerCase()}
              </p>
            </div>
          )}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Result;
