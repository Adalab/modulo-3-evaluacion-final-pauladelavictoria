import { Link } from 'react-router-dom';


const Character = (props) => {

return (
    <li  className="card">
      <Link className='link' to={`/characterdetails/${props.character.name}`}>Más información</Link>
      <img
        className="card_img"
        src={props.character.image ? props.character.image : `https://via.placeholder.com/210x290/ffffff/666666/?text=${props.character.name}`}
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <div className='card_data'>
       
      <h3 className="card_data-title">{props.character.name}</h3>
      <p className="card_data-info">{props.character.species}</p> 
      <p className="card_data-info">{props.character.alive ? 'Vive' : 'Ya no vive'}</p>
      </div>
      
    </li>
  );
}
  export default Character;