import { Link } from "react-router-dom";
import getPlaceholder from "../services/placeholder";
import gry from "../images/gry.png";
import sly from "../images/sly.png";
import huf from "../images/huf.png";
import rav from "../images/rav.png";
import fakeNews1 from "../images/fakeNews1.jpg";
import fakeNews2 from "../images/fakeNews2.jpg";

const Characterdetails = (props) => {
  // Placeholder
  const placeholder = getPlaceholder();
  // Escudo de cada casa
  const getCrestSrc = (house) => {
    if (house === "Gryffindor") return gry;
    else if (house === "Slytherin") return sly;
    else if (house === "Hufflepuff") return huf;
    else if (house === "Ravenclaw") return rav;
  };

  return (
    <section className="cardDetail">
      <div className="cardDetail_container">
        <div className="container-link">
          <Link className="info_link" to="/">
            &#60;– Back
          </Link>
          <div className="black-line"></div>
          
          <img
          className="info_crest"
          src={getCrestSrc(props.character.house)}
          alt="Escudo de la casa"
        />
        </div>
      
        {/* imagen character */}
        <img
          className="cardDetail_container-img"
          src={props.character.image ? props.character.image : placeholder}
          alt={`Foto de ${props.character.name}`}
          title={`Foto de ${props.character.name}`}
        />

        {/* contenedor info */}
        <div className="cardDetail_container-info">
          <h2 className="info_maintitle"> {props.character.name}</h2>

          <ul>
            <li className="cardDetail_info">
              Species: {props.character.species}
            </li>
            <li className="cardDetail_info">
              {" "}
              status:
              {props.character.alive ? " Alive" : " Dead"}
            </li>
            <li className="cardDetail_info">House: {props.character.house}</li>
            <li className="cardDetail_info">
              Gender: {props.character.gender}
            </li>
           {props.character.patronus && <li className="cardDetail_info">
              Patronus: {props.character.patronus} 
            </li>}

            {props.character.ancestry && <li className="cardDetail_info">
              Ancestry: {props.character.ancestry}
            </li>}
          </ul>
        </div>
        <img className="fake_news" src={fakeNews1} role="presentation" />
        <img className="fake_news none" src={fakeNews2} role="presentation" />
      </div>
    </section>
  );
};

export default Characterdetails;
