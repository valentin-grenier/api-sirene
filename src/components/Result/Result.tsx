import './Result.scss';
import {
  MdOutlineNumbers,
  MdBusiness,
  MdDateRange,
  MdOutlineDriveFileRenameOutline,
  MdHome,
  MdPermContactCalendar,
} from 'react-icons/md';

const Result = () => {
  return (
    <div className="result">
      <div id="siret">
        <h3>
          <MdOutlineNumbers />
          Siret
        </h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div id="owner">
        <h3>
          <MdPermContactCalendar />
          Gérant
        </h3>
        <p>Valentin Grenier</p>
      </div>
      <div id="type">
        <h3>
          <MdBusiness />
          Type d'établissement
        </h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div id="creation-date">
        <h3>
          <MdDateRange />
          Date de création
        </h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div id="name">
        <h3>
          <MdOutlineDriveFileRenameOutline />
          Nom de l'enseigne
        </h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div id="address">
        <h3>
          <MdHome />
          Adresse postale
        </h3>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
};

export default Result;
