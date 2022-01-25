
// import { Link } from 'react-router-dom';

const Character = (props) => {

return (
    <li  className="card">
      {/* <Link to={`/user/${props.user.id}`}> */}
      <img
        className="card__img"
        src={props.character.image ? props.character.image : `https://via.placeholder.com/210x290/ffffff/666666/?text=${props.character.name}`}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <h3 className="card__title">{props.character.name}</h3>
      <p className="card__info">{props.character.species}</p> 
      <p className="card__info">{props.character.alive ? 'Vive' : 'Ya no vive'}</p>
    </li>
  );
}
  export default Character;