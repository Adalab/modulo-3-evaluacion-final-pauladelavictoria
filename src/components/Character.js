import { Link } from "react-router-dom";
import placeholder1 from "../images/1.gif";
import placeholder2 from "../images/2.gif";
import placeholder3 from "../images/3.gif";
import placeholder4 from "../images/4.gif";
import placeholder5 from "../images/5.gif";
import placeholder6 from "../images/6.gif";
import placeholder7 from "../images/7.gif";
import placeholder8 from "../images/8.gif";


const Character = (props) => {
  // placeholder con randomNumber
  const max = 8;
   const getRandomNumber = (max) => {
    return Math.ceil(Math.random() * max);
  }
  const randomNumber = getRandomNumber(max);
  let placeholder;
  if (randomNumber === 1){
placeholder = placeholder1
  } else if (randomNumber === 2){
    placeholder = placeholder2
      } else if (randomNumber === 3){
        placeholder = placeholder3
          } else if (randomNumber === 4){
            placeholder = placeholder4
              } else if (randomNumber === 5){
                placeholder = placeholder5
                  } else if (randomNumber === 6){
                    placeholder = placeholder6
                      } else if (randomNumber === 7){
                        placeholder = placeholder7
                          } else if (randomNumber === 8){
                            placeholder = placeholder8
                              } 

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
  
        
        <p className="card_data-info">{props.character.species}</p>
        <p className="card_data-info">
          {props.character.alive ? "Vive" : "Ya no vive"}</p>
      </div>
    </li>
    </Link>
  );
};
export default Character;
