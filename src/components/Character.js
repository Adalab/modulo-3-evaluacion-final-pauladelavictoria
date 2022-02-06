import { Link } from "react-router-dom";


const Character = (props) => {
  return (
    <Link className="link" to={`/characterdetails/${props.character.name}`}>
    <li className="card">
      <h3 className="card_title">{props.character.name}</h3>
      <img
        className="card_img"
        src={props.character.image ? props.character.image : ''}
        // Falta
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <div className="card_data">
  
        
        <p className="card_data-info">{props.character.species}</p>
        <p className="card_data-info">
          {props.character.alive ? "Vive" : "Ya no vive"}
        </p>
          <img
            className="card-logo"
            // src={envelope}
            alt="carta de howarts"
            title="carta de howarts"
          />
      </div>
    </li>
    </Link>
  );
};
export default Character;
