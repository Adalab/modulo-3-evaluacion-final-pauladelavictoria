import placeholder1 from "../images/1.gif";
import placeholder2 from "../images/2.gif";
import placeholder3 from "../images/3.gif";
import placeholder4 from "../images/4.gif";
import placeholder5 from "../images/5.gif";
import placeholder6 from "../images/6.gif";
import placeholder7 from "../images/7.gif";
import placeholder8 from "../images/8.gif";



const getPlaceholder = () => {
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
    return placeholder;
};

export default getPlaceholder;
  