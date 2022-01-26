import { Link } from "react-router-dom";
import wand from '../images/wand.png';
import gryffindor from '../images/gry.jpg';

const Characterdetails = (props) => {
   
  return (
    <section className='mainDetail'>

<div className="cardDetail">
      <h2 className="cardDetail_maintitle">{`Información sobre: ${props.character.name}`}</h2>
      <img
        className="cardDetail_img"
        src={
          props.character.image
            ? props.character.image
            : `https://via.placeholder.com/210x290/ffffff/666666/?text=${props.character.name}`
        }
        alt={`Foto de ${props.character.name}`}
        title={`Foto de ${props.character.name}`}
      />
      <ul>
      <li className="cardDetail_info">Especie: {props.character.species}</li>
      <li className="cardDetail_info"> status: 
        {props.character.alive ? " Vive" : " Ya no vive"}
      </li>
      <li className="cardDetail_info">Casa: {props.character.house}</li>
      <li className="cardDetail_info">Género: {props.character.gender}</li>
      </ul>
      <img className="cardDetail_info-logo" src={gryffindor} alt="varita de Harry Potter" />
      </div>
      <Link className="cardDetail_link"to="/">Volver al incio <img
        className="cardDetail_link-img"
        src={wand}
        alt='Icono de una varita'
        title='Icono de una varita'
      /></Link>
    </section>
  );
};

export default Characterdetails;
