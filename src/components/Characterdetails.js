import { Link } from "react-router-dom";
import gry from '../images/gry.png';
import sly from '../images/sly.png';
import huf from '../images/huf.png';
import rav from '../images/rav.png';


const Characterdetails = (props) => {

  const getCrestSrc = (house) => {
    if (house === 'Gryffindor') return gry
    else if (house === 'Slytherin') return sly
    else if (house === 'Hufflepuff') return huf
    else if (house === 'Ravenclaw') return rav
  }
   
  return (
    <section className='mainDetail'>

<div className="cardDetail">
      <h2 className="cardDetail_maintitle">{`Información sobre: ${props.character.name}`}</h2>
      <img
        className="cardDetail_img"

        src={props.character.image ? props.character.image : ''}
        // Falta
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

      <img className="cardDetail_info-logo" src={getCrestSrc(props.character.house)}
      alt="Escudo de gryffindor" />

      </div>
      <Link className="cardDetail_link"to="/">Volver al incio <img
        className="cardDetail_link-img"
        // src={wand}
        alt='Icono de una varita'
        title='Icono de una varita'
      /></Link>
    </section>
  );
};

export default Characterdetails;
