import { Link } from "react-router-dom";
import envelope from "../images/envelope.png";
import imgplace from "../images/imgplace.png";

const Character = (props) => {
  return (
    <li className="card">
      <img
        className="card_img"
        src={props.character.image ? props.character.image : imgplace}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <div className="card_data">
        <h3 className="card_data-title">{props.character.name}</h3>
        <p className="card_data-info">{props.character.species}</p>
        <p className="card_data-info">
          {props.character.alive ? "Vive" : "Ya no vive"}
        </p>

        <Link className="link" to={`/characterdetails/${props.character.name}`}>
          <img
            className="card-logo"
            src={envelope}
            alt="carta de howarts"
            title="carta de howarts"
          />
        </Link>
      </div>
    </li>
  );
};
export default Character;
