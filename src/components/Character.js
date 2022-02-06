import { Link } from "react-router-dom";
import getPlaceholder from "../services/placeholder";

const Character = (props) => {
  const placeholder = getPlaceholder();
  return (
    <Link className="link" to={`/characterdetails/${props.character.name}`}>
      <li className="card">
        <h3 className="card_title">{props.character.name}</h3>
        <img
          className="card_img"
          src={props.character.image ? props.character.image : placeholder}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />
        <div className="card_data">
          <p className="card_data-info">{`${
            props.character.alive ? "Alive" : "Dead"
          } ${props.character.ancestry} ${props.character.species} from house ${
            props.filterHouse
          } interpreted by ${props.character.actor}`}</p>
        </div>
      </li>
    </Link>
  );
};
export default Character;
